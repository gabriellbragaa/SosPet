import { images } from '../assets/images';
import { LINKS } from './constants';

export const HISTORY_INTRO =
  'O SOS nasceu de um trabalho voluntário e de uma história construída por muitas pessoas ao longo dos anos.';

export const HISTORY_ORIGIN = {
  image: images.historiaFundadoras,
  caption: 'Inelsa e Ieline',
  alt: 'Inelsa Lopes e Ieline Carneiro',
  text:
    'Tudo começou a ganhar força com a proximidade entre Inelsa Lopes e Ieline Carneiro. Ieline já fazia um trabalho voluntário de proteção aos animais, e Inelsa admirava seu carinho e sua dedicação. Desse exemplo nasceu a vontade de ajudar ainda mais.',
};

export const HISTORY_QUOTE = {
  image: images.aisha,
  name: 'Aisha',
  alt: 'Aisha, a cachorrinha de Inelsa',
  context: 'Quando Inelsa acolheu sua cachorrinha Aisha, veio a reflexão:',
  quote:
    'Se eles sentem amor, também sentem fome, dor, medo e adoecem. Então, por que não fazer alguma coisa por aqueles que estão nas ruas?',
};

export const HISTORY_TIMELINE = [
  {
    id: '2013',
    label: '2013',
    title: 'O trabalho fica constante',
    text:
      'Inelsa e Ieline passam a atuar de forma mais assídua. Outras pessoas se juntam, entre elas Rayane, que permanece no SOS até hoje.',
  },
  {
    id: 'lares',
    label: 'Sem sede',
    title: 'Abrigo nas casas das voluntárias',
    text:
      'Antes de o SOS existir oficialmente, cada resgate virava busca por atendimento e por uma família. Os animais ficavam na garagem de Inelsa, na casa de Rayane e, em alguns momentos, na casa de Larissa. Nunca tivemos abrigo ou sede própria.',
    image: images.historiaLares,
    alt: 'Animal acolhido na casa de uma voluntária',
  },
  {
    id: '2019',
    label: '2019',
    title: 'Começam as rotas de alimentação',
    text:
      'Passamos a percorrer as ruas de forma sistemática, de segunda a domingo, levando alimento e identificando animais que precisavam de ajuda.',
    image: images.historiaRotas,
    alt: 'Voluntária levando ração em uma rota',
  },
  {
    id: 'pandemia',
    label: 'Pandemia',
    title: 'Quando as ruas ficaram vazias',
    text:
      'Os animais continuavam nas ruas e precisavam comer. A atuação nas rotas se tornou ainda mais necessária.',
  },
  {
    id: 'ong',
    label: 'ONG',
    title: 'Organização e formalização',
    text:
      'Criamos o Instagram para dar visibilidade às ações e aproximar quem acredita na causa. Depois, buscamos orientação e parcerias para formalizar o SOS como ONG, com o apoio do vereador Romário na parte documental.',
    link: { label: 'Ver nosso Instagram', url: LINKS.instagram },
  },
  {
    id: 'castracao',
    label: 'Castração',
    title: 'Prevenir é o maior objetivo',
    text:
      'Por meio do Castramóvel e de outras parcerias, uma das primeiras grandes ações castrou cerca de 150 cães e gatos, incluindo uns 15 animais de rua. Recentemente, mais cerca de 10 animais de rua foram castrados, e já fizemos cerca de 3 ações de encoleiramento.',
    image: images.historiaCastracao,
    alt: 'Mutirão de castração com o Castramóvel',
    facts: ['~150 castrados em mutirão', '~3 ações de encoleiramento'],
    link: { label: 'Ver as ações', url: LINKS.instagramCastracao },
  },
  {
    id: 'hoje',
    label: 'Hoje',
    title: 'As rotas seguem todos os dias',
    text:
      'Alcançamos aproximadamente 100 animais de rua e comunitários com suplementação alimentar, e buscamos apoio para castrações, tratamentos, medicamentos e antiparasitários.',
    facts: ['~100 animais nas rotas', '~5 atendimentos por mês'],
  },
];

export const HISTORY_NOTE =
  'Esses cerca de 100 animais não estão sob guarda do SOS: são os que alcançamos nas rotas. Sem sede e sem verba mensal fixa, conseguimos fazer em média cinco atendimentos individuais por mês, entre castrações, tratamentos e outras necessidades.';

export const HISTORY_PEOPLE = ['Inelsa Lopes', 'Ieline Carneiro', 'Rayane', 'Larissa'];
export const HISTORY_PARTNERS = ['Vereador Romário'];

export const HISTORY_CLOSING =
  'O SOS continua fazendo o que é possível, dentro das suas limitações, para cuidar, alimentar, resgatar, castrar, conscientizar e buscar uma vida mais digna para os animais que precisam de ajuda.';

export const HISTORY_FULL = [
  'Além das castrações, os resgates também fazem parte dessa história. Já salvamos inúmeros animais e ajudamos em situações graves, inclusive casos de TVT, erliquiose e cinomose. Também realizamos campanhas de conscientização sobre maus-tratos, proteção animal e guarda responsável.',
  'Ao longo dos anos, construímos uma rede de voluntários e parceiros. Entre eles estão os meninos da EDMIA, além de outras pessoas que contribuíram e continuam contribuindo de diferentes formas. O SOS também busca constantemente parcerias para trazer ações de proteção animal para o município.',
  'Nosso maior objetivo continua sendo ampliar as ações de castração e trabalhar na prevenção. Acreditamos que o controle da população animal é fundamental para reduzir o abandono e o sofrimento.',
  'Essa história não foi passageira. O trabalho voluntário passou a fazer parte da vida de quem começou essa caminhada. Inelsa, Ieline, Rayane e tantas outras pessoas que passaram pelo SOS deixaram e continuam deixando sua contribuição.',
  'Nada começa do zero. Houve a inspiração de Ieline, o amor que Aisha despertou, a união de voluntários e parceiros e, principalmente, a percepção de que cada animal importa.',
];
