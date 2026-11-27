/* ========================================
   1. DADOS DO PERSONAGEM
======================================== */

const character = {
    name: "Boris Leuenaar",

    epithet: "Tudo pode ser descoberto lendo as cartas... Ou a pessoa que puxou elas.",

    intro: "Nem todo Tiefling é mau, mas Boris certamente é caótico. Escondendo suas verdadeiras intenções através de sorrisos fáceis e um olhar oblíquo, ele chega em Magaambya, para a surpresa de todos os alunos dos Ramos Esmeraldas, financiado pelo mais bonzinho dos professores.",

    role: "Oracle · Lore Mystery",

    level: 1,

    className: "Oracle",

    spellcasting: {
        ability: "CAR",
        proficiency: "trained"
    },

    art: "",

    facts: [
        { label: "Ancestralidade", value: "Elfo" },
        { label: "Herança", value: "Nephilim ✧ Hellspawn" },
        { label: "Mistério", value: "Lore" },
        { label: "Origem", value: "Sponsored by Teacher Ot" },
        { label: "Idade", value: "27 anos" },
        { label: "Alinhamento", value: "Chaotic Neutral" }
    ],

    bio: `Boris Leuenaar é apenas mais uma das inúmeras crianças demônio que foi abandonada por conta das crenças do povo de Mwangi. Cresceu pelas ruas de Bloodcove, lugar onde foi abandonado durante uma viagem de barco dos seus pais. Ou pelo menos é nisso que acreditava.

        Durante a infância, sobrevivia como um marginal com o restante das crianças. Se tornou especialmente próximo de outras três: uma Nephlim endiabrada como ele, chamada Amara; um Amurrun com pelagem de guepardo chamado Leper; e uma Iruxi chamada Param. Juntos se denominaram como 'O Quarteto Lancinante' e, durante sua infância e adolescência, aprontavam e roubavam pelas ruas de Bloodcove. 

        Sendo todas crianças órfãs ou abandonadas, não tinham um sobrenome. Por isso, juntos, decidiram sobrenomes para si. O que Boris escolheu para si foi uma palavra que significava 'mentira', pois sempre foi um bom enganador, e se orgulhava disso.

        Com o passar dos anos, cada um começou a seguir seu próprio caminho. Leper, o mais novo, se juntou à embarcação de um Capitão Livre que passou por BloodCove e agora raramente dá as caras na cidade. Amara se tornou uma curandeira (das bem bravas) e que, no tempo livre, tenta cuidar do maior número de crianças órfãs possível. Param, sendo pouco mais velha, continuou na vida do crime, agora como uma mercenária, viajando por toda Expansão Mwangi, mas sem esquecer das suas origens.

        Boris acabou ficando pela famosa Praça do Livre Comércio. Tendo uma afinidade com magia e um charme natural que atraia qualquer um para as garras do Cartomante Endiabrado, era fácil fazer leituras da sorte para tirar dinheiro dos turistas e pobres desesperados em saber o futuro. Ele só tinha que fugir, vez ou outra, de alguém que veio cobrar por suas leituras 'inconclusivas', mas a regra de seu estabelecimento era clara: Nada de reembolsos!

        Um dia porém, ele viu algo que não deveria ter visto enquanto lia suas cartas. Sentindo uma leve vertigem, acabou tendo uma visão do seu passado onde viu uma cidade grande que parecia a capital Anthusis e uma embarcação com sua família: seus pais e seu irmão mais velho. A visão foi curta e terminou lhe dando fortes enxaquecas e uma informação, que veio como um sussurro: seu verdadeiro nome. Boreas Krasiv von Aaramong.

        Ele tentou trabalhar naquele dia, porém a enxaqueca não lhe dava paz, e sua mente sempre acabava voltando para a visão. Cansado e sozinho, decidiu sair para beber sozinho.

        Em uma famosa taverna, O Gancho do Pirata, se sentou no balcão e pediu não uma, não duas, mas três rodadas. No fim da terceira garrafa, um homem sorridente que também estava sentado no balcão puxou um pouco seu assento, se aproximando, e começou a puxar papo. O homem, que se identificou como Professor Ot, disse ter visto de longe uma perturbação mágica na aura de Boris, e que via um certo potencial no rapaz. Mesmo já estando leve por conta do álcool ingerido, o tiefling rapidamente se empertigou na cadeira, achando que seria mais um humano que caçoaria dele por conta de sua herança demoníaca, mas... A zombaria nunca veio. O tal Professor Ot o tratou com um respeito que Boris nunca havia recebido. 

        Confiando nas palavras daquele homem, o rapaz decidiu contar sobre o que lhe ocorreu, a visão, a dor de cabeça, o seu verdadeiro nome... E perguntou se ele tinha algum conselho. Ot examinou Boris e, com um sorriso gentil, convidou-o para Magaambya, como um de seus pupilos. Antes de ir embora, lhe deu um pequeno cartão para onde se dirigir caso decidisse se juntar à escola de magia.

        Naquela noite, em sua cama acabou rolando na cama, acordado, até o sol bater em sua cara pela fresta da janela. Se levantando, só fez um café, separou uma pequena trouxa de roupas em uma bolsa e decidiu ir até a Escola de Magia em Nantambu, determinado a descobrir mais sobre seu novo estranho poder e sobre seu passado.`,

    stats: [
        { abbreviation: "FOR", name: "Força", value: 0, max: 6 },
        { abbreviation: "DES", name: "Destreza", value: 2, max: 6 },
        { abbreviation: "CON", name: "Constituição", value: 0, max: 6 },
        { abbreviation: "INT", name: "Inteligência", value: 3, max: 6 },
        { abbreviation: "SAB", name: "Sabedoria", value: 0, max: 6 },
        { abbreviation: "CAR", name: "Carisma", value: 4, max: 6 }
    ],

    skills: [
        { name: "Acrobacia", ability: "DES", rank: "trained" },
        { name: "Arcanismo", ability: "INT", rank: "trained" },
        { name: "Atletismo", ability: "FOR", rank: "untrained" },
        { name: "Artesanato", ability: "INT", rank: "untrained" },
        { name: "Enganação", ability: "CAR", rank: "trained" },
        { name: "Diplomacia", ability: "CAR", rank: "trained" },
        { name: "Intimidação", ability: "CAR", rank: "untrained" },
        { name: "Conhecimento: Leitura de Sorte", ability: "INT", rank: "trained" },
        { name: "Conhecimento: Leis", ability: "INT", rank: "trained" },
        { name: "Conhecimento: Bloodcove", ability: "INT", rank: "trained" },
        { name: "Medicina", ability: "SAB", rank: "untrained" },
        { name: "Natureza", ability: "SAB", rank: "untrained" },
        { name: "Ocultismo", ability: "INT", rank: "trained" },
        { name: "Performance", ability: "CAR", rank: "trained" },
        { name: "Religião", ability: "SAB", rank: "trained" },
        { name: "Sociedade", ability: "INT", rank: "trained" },
        { name: "Furtividade", ability: "DES", rank: "trained" },
        { name: "Sobrevivência", ability: "SAB", rank: "untrained" },
        { name: "Ladinagem", ability: "DES", rank: "trained" }
    ],

    speed: "30 ft",

    defenses: [
        {
            name: "Vontade",
            rank: "expert"
        },
        {
            name: "Reflexos",
            rank: "trained"
        },
        {
            name: "Fortitude",
            rank: "trained"
        },
        {
            name: "Percepção",
            rank: "trained"
        }
    ],

    relationships: [
        {
            name: "Takulu Ot",
            role: "Professor/Mentor",
            tone: "positive",
            portrait: "assets/images/characters/teacherot.jpg",
            description: "O mais bonzinho dos professores parece ter um apreço por seu púpilo, e nem Boris entende o porquê direito, mas sua mentoria e seu cuidado fazem ele achar que realmente mereça mais do fizeram-no acreditar."
        },
        {
            name: "Amara Saidi",
            role: "Amiga de Infância",
            tone: "positive",
            portrait: "assets/images/characters/amarasaidi.jpg",
            description: "Amara, assim como Boris, é uma criança 'endiabrada' e a única do quarteto que conseguiu um trabalho digno como enfermeira local. Eles tem idades próximas. Cresceram juntos nas ruas de Bloodcove e formaram o Quarteto Lancinante junto de Leper e Param."
        },
        {
            name: "Leper Langa",
            role: "Amigo de Infância",
            tone: "positive",
            portrait: "assets/images/characters/leperlanga.jpg",
            description: "Como o mais novo deles, Leper sempre foi o mais agitado dos quatro, e talvez por isso tenha se dado tão bem na vida da pirataria quando cresceu. Cresceram juntos nas ruas de Bloodcove e formaram o Quarteto Lancinante junto de Param e Amara."
        },
        {
            name: "Param Juma",
            role: "Amiga de Infância",
            tone: "positive",
            portrait: "assets/images/characters/paramjuma.jpg",
            description: "A mais velha dos quatro. Com um olhar afiado, Param foi quem ensinou o grupo não a brigar, mas sim a matar. A vida mercenária chegou a ela como um convite irrecusável. Cresceram juntos nas ruas de Bloodcove e formaram o Quarteto Lancinante junto de Amara e Leper."
        },
        {
            name: "Kamau Krasiv von Aaramong",
            role: "Irmão",
            tone: "negative",
            portrait: "assets/images/characters/kamau.jpg",
            description: "Apesar de Boris não saber, Kamau foi quem jogou seu irmão do navio quando ambos eram bem novos. Ele é mais velho que Boris e também é um tiefling, mas raspa os próprios chifres para que não apareçam no cabelo volumoso."
        },
        {
            name: "Bantu Krasiv von Aaramong",
            role: "Pai",
            tone: "neutral",
            portrait: "assets/images/characters/bantu.jpg",
            description: "Um elfo da alta sociedade que acha ter perdido o filho mais novo em uma tempestade enquanto viajavam em uma embarcação. Se culpa muito pela 'morte' do filho e quase nunca saí de sua propriedade em Anthusis."
        },
        {
            name: "Dandara Krasiv von Aaramong",
            role: "Mãe",
            tone: "neutral",
            portrait: "assets/images/characters/dandara.jpg",
            description: "Uma elfa nephlim da alta sociedade. Dandara é e sempre foi uma mãe amorosa, e apesar de perder o filho mais novo e do distanciamento do marido, ela fez o possível para se manter forte e cuidar de Kamau que ainda era bem jovem."
        }
    ],

    derivedStats: [
        { label: "PONTOS DE VIDA", value: "14 / 14", note: "PV atuais / máximos" },
        { label: "CLASSE DE ARMADURA", value: "17", note: "Defesa atual" }
    ],

    carry: { current: 4, max: 10 },

    inventory: [
        {
            name: "Tesoura",
            category: "equipment",
            type: "Arma",
            rarity: "Incomum",
            icon: "✂",
            quantity: 1,
            description: "Uma tesoura para costura que fica sempre no cinto de Boris. Não é como se ele à escondesse, mas ela também não parece uma arma até ser sacada."
        },
        {
            name: "Armadura de Couro Reforçada",
            category: "equipment",
            type: "Armadura",
            rarity: "Comum",
            icon: "⛉",
            quantity: 1,
            description: "Uma armadura leve de couro é reforçada com rebites de metal e, por vezes, pequenas placas metálicas, oferecendo a maior parte da flexibilidade de uma armadura de couro, porém com uma proteção mais robusta. É negra como a noite."
        },
        {
            name: "Escudo de Aço",
            category: "equipment",
            type: "Escudo",
            rarity: "Comum",
            icon: "⛊",
            quantity: 1,
            description: "Assim como os escudos de madeira, os escudos de aço apresentam uma variedade de formatos e tamanhos. Embora sejam mais caros que os de madeira, são muito mais duráveis. O escudo de Boris é de um aço azulado, e parece muito usado para ser de um mago."
        },
        {
            name: "Mochila",
            category: "equipment",
            type: "Mochila para Carga",
            rarity: "Comum",
            icon: "👜",
            quantity: 1,
            description: "Uma mochila comporta até 4 unidades de Volume (Bulk) em itens, e as primeiras 2 unidades de Volume desses itens não contam para os seus limites de Volume. Se você estiver carregando ou guardando a mochila, em vez de usá-la nas costas, o Volume dela passa a ser leve (light) em vez de desprezível (negligible). Parece uma bolsa de carteiro lateral."
        },
        {
            name: "Kit de Aventureiro",
            category: "consumables",
            type: "Suprimento",
            rarity: "Comum",
            icon: "✣",
            quantity: 1,
            description: `Este item é o kit inicial para um aventureiro, contendo os itens essenciais para exploração e sobrevivência. O valor de volume (Bulk) refere-se ao conjunto completo; consulte as descrições de cada item individual, se necessário. O kit contém os seguintes itens: uma mochila, um saco de dormir (ou rolo de dormir), 10 pedaços de giz, pederneira (fogo e aço), 50 pés (aprox. 15 metros) de corda, rações para 2 semanas, sabão, 5 tochas e um odre.`
        }
    ],

        spells: {
            class: [
                {
                    name: "Haunting Hymn (Cântico Assombroso)",
                    rank: "cantrip",
                    tradition: "divine",
                    actions: "2 ações",
                    range: "",
                    area: "Cone de 3 quadrados",
                    targets: "Criaturas na área que podem escutar",
                    duration: "",
                    savingThrow: "Fortitude",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Auditory, Cantrip, Concentrate, Manipulate, Sonic",
                    damage: "1d8",
                    healing: "",
                    heightened: "+2: O dano aumenta em 1d8.",
                    description: "Você entoa um hino estridente que apenas as criaturas na área conseguem ouvir. O hino causa 1d8 de dano sônico, com um teste de Fortitude básico. Se um alvo falhar criticamente no teste, ele também fica surdo por 1 minuto.",
                    signature: false
                },
                {
                    name: "Prestidigitation (Prestidigitação)",
                    rank: "cantrip",
                    tradition: "divine",
                    actions: "2 ações",
                    range: "2 quadrados",
                    area: "",
                    targets: "Um objeto",
                    duration: "Sustentada",
                    savingThrow: "",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Cantrip, Concentrate, Manipulate",
                    damage: "",
                    healing: "",
                    heightened: "",
                    description: `A magia mais simples atende aos seus comandos. Você pode realizar efeitos mágicos simples enquanto Mantiver a magia. Cada vez que você Mantiver a magia, pode escolher uma de quatro opções:
                                    **• Cozinhar:** Esfriar, aquecer ou dar sabor a até 1 libra (aprox. 0,5 kg) de material inanimado.
                                    **• Levantar:** Levantar lentamente um objeto sem dono, de volume leve ou menor, a 1 pé (aprox. 30 cm) do chão.
                                    **• Criar:** Criar um objeto temporário de volume desprezível, feito de substância mágica solidificada. O objeto tem uma aparência grosseira e artificial, sendo extremamente frágil — ele não pode ser usado como ferramenta, arma, foco ou componente para uma magia.
                                    **• ​​Organizar:** Colorir, limpar ou sujar um objeto de volume leve ou menor. Você pode afetar um objeto de volume 1 com 10 rodadas de concentração, e objetos maiores à taxa de 1 minuto por unidade de volume. Prestidigitação não pode causar dano nem condições adversas. Qualquer alteração real em um objeto (além das mencionadas acima) persiste apenas enquanto você Mantiver a magia.`,
                    signature: false
                },
                {
                    name: "Daze (Atordoar)",
                    rank: "cantrip",
                    tradition: "divine",
                    actions: "2 ações",
                    range: "12 quadrados",
                    area: "",
                    targets: "1 criatura",
                    duration: "1 rodada",
                    savingThrow: "Vontade",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Cantrip, Concentrate, Manipulate, Mental, Nonlethal",
                    damage: "1d6",
                    healing: "",
                    heightened: "+2: O dano aumenta em 1d6.",
                    description: `Você invade a mente do alvo e o atordoa com um choque mental. O choque causa 1d6 de dano mental, sujeito a um teste de Vontade básico. Se o alvo falhar criticamente no teste, ele também fica atordoado 1.`,
                    signature: false
                },
                {
                    name: "Message (Mensagem)",
                    rank: "cantrip",
                    tradition: "divine",
                    actions: "1 ação",
                    range: "24 quadrados",
                    area: "",
                    targets: "1 criatura",
                    duration: "",
                    savingThrow: "",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Auditory, Cantrip, Concentrate, Illusion, Linguistic, Mental, Subtle",
                    damage: "",
                    healing: "",
                    heightened: "+3: O alcance da magia aumenta para 100 quadrados.",
                    description: `Você articula palavras silenciosamente, mas, em vez de saírem da sua boca, elas são transmitidas diretamente para os ouvidos do alvo. Embora outras pessoas não consigam ouvir suas palavras melhor do que se você as estivesse articulando normalmente, o alvo consegue ouvi-las como se estivesse ao seu lado. O alvo pode dar uma breve resposta como uma reação, ou como uma ação livre no seu próximo turno, caso deseje; no entanto, para isso, ele precisa ser capaz de vê-lo e estar dentro do alcance. Se o alvo responder, a resposta é transmitida diretamente ao seu ouvido, da mesma forma que a mensagem original.`,
                    signature: false
                },
                {
                    name: "Stabilize (Estabilizar)",
                    rank: "cantrip",
                    tradition: "divine",
                    actions: "2 ações",
                    range: "6 quadrados",
                    area: "",
                    targets: "1 criatura morrendo",
                    duration: "",
                    savingThrow: "",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Cantrip, Concentrate, Healing, Manipulate, Vitality",
                    damage: "",
                    healing: "",
                    heightened: "",
                    description: `A energia vital fecha a porta da morte. O alvo perde a condição de morrendo, embora permaneça inconsciente com 0 Pontos de Vida.`,
                    signature: false
                },
                {
                    name: "Read Aura (Ler Aura)",
                    rank: "cantrip",
                    tradition: "divine",
                    granted: true,
                    actions: "1 minute",
                    range: "6 quadrados",
                    area: "",
                    targets: "1 objeto",
                    duration: "",
                    savingThrow: "",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Cantrip, Concentrate, Detection, Manipulate",
                    damage: "",
                    healing: "",
                    heightened: `+3: Você pode escolher como alvo até 10 objetos. +6: Você pode escolher como alvo qualquer quantidade de objetos.`,
                    description: `Você se concentra no objeto-alvo, abrindo sua mente para perceber auras mágicas. Ao concluir a conjuração, você sabe se o item é mágico. Você, ou qualquer pessoa a quem você informe sobre a aura, recebe um bônus de circunstância de +2 em testes para Identificar Magia no item. Se o objeto for ilusório, você só detectará isso se o nível do efeito for inferior ao nível da sua magia Ler Aura.`,
                    signature: false
                },
                {
                    name: "Heal (Curar)",
                    rank: 1,
                    tradition: "divine",
                    actions: "1 ação",
                    range: "Vária",
                    area: "",
                    targets: "1 criatura viva disposta ou 1 criatura morta-viva",
                    duration: "",
                    savingThrow: "Fortitude (se morto-vivo)",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Healing, Manipulate, Vitality",
                    damage: "1d8",
                    healing: "1d8",
                    heightened: "+1: A quantidade de cura ou dano aumenta em 1d8, e a cura adicional para a versão de 2 ações aumenta em 8.",
                    description: `Você canaliza energia vital para curar seres vivos ou causar dano a mortos-vivos. Se o alvo for uma criatura viva disposta, você restaura 1d8 Pontos de Vida. Se o alvo for uma criatura morta-viva, você causa a ela uma quantidade equivalente de dano de vitalidade, e ela tem direito a um teste básico de Fortitude. O número de ações que você gasta ao conjurar esta magia determina seus alvos, alcance, área e outros parâmetros.
                        **1 ação:** A magia tem alcance de toque.
                        **2 ações + trait concentrate:** A magia tem um alcance de 30 pés (aprox. 9 metros). Se você estiver curando uma criatura viva, aumente a quantidade de Pontos de Vida restaurados em 8.
                        **3 ações + trait concentrate:** Você dispersa energia vital em uma emanação de 30 pés (aprox. 9 metros). Isso afeta todas as criaturas vivas e mortas-vivas dentro da área.`,
                    signature: false
                },
                {
                    name: "Command (Comandar)",
                    rank: 1,
                    tradition: "divine",
                    traits: "Auditory, Concentrate, Linguistic, Manipulate, Mental",
                    actions: "2 ações",
                    range: "6 quadrados",
                    targets: "1 criatura",
                    duration: "Até o fim do próximo turno do alvo",
                    savingThrow: "Vontade",
                    heightened: "(+5): Você pode escolher como alvo até 10 criaturas.",
                    description: `Você profere um comando difícil de ignorar. É possível ordenar que o alvo se aproxime de você, fuja (como se estivesse sob a condição de fuga), solte o que estiver segurando, caia no chão (ficando caído) ou permaneça onde está. O alvo não pode adiar sua ação nem realizar reações até que tenha obedecido ao seu comando. Os efeitos dependem do teste de Vontade do alvo.
                                    **Sucesso:** A criatura não é afetada.
                                    **Falha:** A criatura deve gastar a primeira ação de seu próximo turno para obedecer ao seu comando.
                                    **Falha Crítica:** O alvo deve usar todas as suas ações em seu próximo turno para obedecer ao seu comando.`,
                    signature: false
                },
                {
                    name: "Benediction (Bênção)",
                    rank: 1,
                    tradition: "divine",
                    actions: "2 ações",
                    range: "Pessoal (emana de você)",
                    area: "Emanação de 3 quadrados",
                    targets: "Aliados na área",
                    duration: "1 minuto",
                    savingThrow: "",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Aura, Concentrate, Manipulate, Mental",
                    damage: "",
                    healing: "",
                    heightened: "",
                    description: "Proteção divina ajuda a proteger seus companheiros. Você e seus aliados recebem um bônus de status de +1 na CA enquanto estiverem dentro da emanação. Uma vez por rodada, em turnos subsequentes, você pode manter o efeito da magia para aumentar o raio da emanação em 10 pés. A Bênção pode neutralizar a magia Maldição.",
                    signature: false
                },
                {
                    name: "Mindlink (Elo Mental)",
                    rank: 1,
                    tradition: "divine",
                    granted: true,
                    actions: "2 ações",
                    range: "Toque",
                    area: "",
                    targets: "1 Criatura disposta",
                    duration: "",
                    savingThrow: "",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Concentrate, Manipulate, Mental",
                    damage: "",
                    healing: "",
                    heightened: "",
                    description: "Você conecta sua mente à mente do alvo e, instantaneamente, transmite a ele uma quantidade de informações que, de outra forma, levaria 10 minutos para ser comunicada.",
                    signature: false
                }
            ],
            innate: [],
            focus: [
                {
                    name: "Brain Drain (Dreno Mental)",
                    rank: 1,
                    tradition: "divine",
                    actions: "2 ações",
                    range: "6 quadrados",
                    area: "",
                    targets: "1 Criatura",
                    duration: "",
                    savingThrow: "Vontade",
                    defense: "",
                    cost: "",
                    requirements: "",
                    trigger: "",
                    components: "",
                    traits: "Uncommon, Concentrate, Focus, Manipulate, Mental, Oracle",
                    damage: "1d8",
                    healing: "",
                    heightened: "+1: O dano mental aumenta em 1d8.",
                    description: "Você sonda a mente do alvo para obter conhecimento. Isso causa 1d8 de dano mental, sujeito a um teste básico de Vontade. Se o alvo falhar no teste, você examina as memórias roubadas para tentar realizar um único teste de Recordar Conhecimento. Escolha uma perícia que possua a ação Recordar Conhecimento e utilize o modificador de perícia do alvo para esse teste.",
                    signature: false
                }
            ]
        },

    journalQuote: "Eu sei o que eles esperam de mim. Por isso não faço questão de prová-los como certos ou errados. Faço questão de ser eu mesmo.",

    journal: [
        {
            title: "Decisão",
            date: "Dia 07",
            text: `Já fazem alguns dias que aceitei o convite do professor Ot. O primeiro dia não foi ruim, acho que por ser uma visita guiada com ele, mas os outros dias... Não sei, sinto que não fiz a escolha certa. Talvez seja a impressão por como os outros alunos me veem. Aquele olhar de que eu não deveria estar ali, ou de que a culpa de qualquer coisa errada é minha.

            Não vi nenhum outro como eu na academia, mas o professor me garantiu que eles existiam. Sendo ou não a decisão certa, agora eu já estava ali. Tinha que fazer valer a pena.

            Ot recomendou que eu me inscrevesse no Ramos Esmeralda, uma das turmas feita para as 'borboletas sociais' como eu.`,
            signature: "Boris L."
        },
        {
            title: "O Começo",
            date: "Dia ?",
            text: `x`,
            signature: "Boris L."
        }
    ],

    playlist: [
        {
            title: "01 - The Spine (feat. Ashley Barrett)",
            artist: "Darren Korb",
            album: "Transistor Original Soundtrack",
            audio: "assets/music/01-The Spine.mp3",
            cover: "assets/images/covers/01.png",
            description: ""
        },
        {
            title: "02 - CHOSEN ANEW",
            artist: "Toby Fox & Camellia",
            album: "OFF Original Soundtrack (2025)",
            audio: "assets/music/02-CHOSEN ANEW.mp3",
            cover: "assets/images/covers/02.png",
            description: ""
        },
        {
            title: "03 - Bewitching Eyes",
            artist: "Supergiant Games",
            album: "Hades II Original Soundtrack",
            audio: "assets/music/03-Bewitching Eyes.mp3",
            cover: "assets/images/covers/03.png",
            description: ""
        },
        {
            title: "04 - Why",
            artist: "Nauts",
            album: "Lies of P Original Soundtrack",
            audio: "assets/music/04-Why.mp3",
            cover: "assets/images/covers/04.png",
            description: ""
        },
        {
            title: "05 - Aqua's Dance (Nohr)",
            artist: "Adriana Figueroa",
            album: "Fire Emblem Conquest Cover",
            audio: "assets/music/05-Aqua's Dance.mp3",
            cover: "assets/images/covers/05.png",
            description: ""
        },
        {
            title: "06 - Playing In The Sun",
            artist: "Beícoli",
            album: "LAIKA: Aged Through Blood (Original Soundtrack)",
            audio: "assets/music/06-Playing In The Sun.mp3",
            cover: "assets/images/covers/06.png",
            description: ""
        },
        {
            title: "07 - My Moon My Man",
            artist: "Feist",
            album: "",
            audio: "assets/music/07-My Moon My Man.mp3",
            cover: "assets/images/covers/07.png",
            description: ""
        }
    ]
};