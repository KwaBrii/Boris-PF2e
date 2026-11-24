import json
from pathlib import Path
from mutagen.id3 import ID3, ID3NoHeaderError

# ==========================================
# CONFIGURAÇÕES
# ==========================================

MUSIC_DIR = Path("assets/music")
COVERS_DIR = Path("assets/images/covers")
MAP_FILE = COVERS_DIR / "cover_map.json"

COVERS_DIR.mkdir(parents=True, exist_ok=True)

# ==========================================
# RELAÇÃO ENTRE MÚSICAS E CAPAS
# ==========================================

if MAP_FILE.exists():
    with MAP_FILE.open("r", encoding="utf-8") as file:
        cover_map = json.load(file)
else:
    # A primeira música já cadastrada.
    cover_map = {
        "CHOSEN ANEW - OFF.mp3": "01"
    }

used_numbers = {
    int(number)
    for number in cover_map.values()
    if str(number).isdigit()
}

next_number = max(used_numbers, default=0) + 1

# ==========================================
# FUNÇÕES
# ==========================================

def get_tag(tags, frame):
    values = tags.getall(frame)
    return str(values[0]) if values else "Não encontrado"

def extract_cover(audio_path):
    global next_number

    try:
        tags = ID3(audio_path)

    except ID3NoHeaderError:
        print(f"\n{audio_path.name}: sem metadados ID3.")
        return

    print(f"\nMúsica: {audio_path.name}")
    print("Título:", get_tag(tags, "TIT2"))
    print("Artista:", get_tag(tags, "TPE1"))
    print("Álbum:", get_tag(tags, "TALB"))

    covers = tags.getall("APIC")

    if not covers:
        print("Nenhuma capa encontrada.")
        return

    # Prioriza a capa frontal.
    cover = next(
        (item for item in covers if item.type == 3),
        covers[0]
    )

    # Recupera o número existente ou atribui um novo.
    number = cover_map.get(audio_path.name)

    if number is None:
        number = f"{next_number:02d}"
        cover_map[audio_path.name] = number

        used_numbers.add(next_number)
        next_number += 1

    # Identifica a extensão da imagem.
    extensions = {
        "image/jpeg": ".jpg",
        "image/jpg": ".jpg",
        "image/png": ".png"
    }

    extension = extensions.get(cover.mime.lower(), ".jpg")

    cover_path = COVERS_DIR / f"{number}{extension}"

    # Evita manter duas extensões para a mesma capa.
    for old_extension in (".jpg", ".png"):
        old_path = COVERS_DIR / f"{number}{old_extension}"

        if old_path.exists() and old_path != cover_path:
            old_path.unlink()

    # Salva a imagem.
    cover_path.write_bytes(cover.data)

    print(f"Capa extraída: {cover_path}")


# ==========================================
# PROCESSAMENTO DE TODAS AS MÚSICAS
# ==========================================

if not MUSIC_DIR.exists():
    print("A pasta de músicas não foi encontrada.")
    raise SystemExit

music_files = sorted(
    file
    for file in MUSIC_DIR.iterdir()
    if file.is_file() and file.suffix.lower() == ".mp3"
)

if not music_files:
    print("Nenhum arquivo MP3 encontrado.")
    raise SystemExit

print(f"Encontradas {len(music_files)} músicas.")

for music in music_files:
    extract_cover(music)

# ==========================================
# SALVA A RELAÇÃO DAS CAPAS
# ==========================================

with MAP_FILE.open("w", encoding="utf-8") as file:
    json.dump(cover_map, file, ensure_ascii=False, indent=4)

print("\nProcessamento concluído!")