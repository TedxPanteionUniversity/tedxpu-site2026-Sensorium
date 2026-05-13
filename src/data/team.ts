export type TeamMember = {
  name: string;
  image: string;
  director?: boolean;
};

export type TeamGroup = {
  name: string;
  accent: string;
  members: TeamMember[];
};

const teamAsset = (fileName: string) => `/assets/team/${fileName}`;

export const teamGroups: TeamGroup[] = [
  {
    name: "Curation Team",
    accent: "#ff1493",
    members: [
      {
        name: "Efstathiou Fanis",
        image: teamAsset("efstathiou-fanis.png"),
      },
      {
        name: "Storismenou Alexandra",
        image: teamAsset("storismenou-alexandra.png"),
      },
    ],
  },
  {
    name: "Graphics & Design Team",
    accent: "#ff4b2e",
    members: [
      {
        name: "Lykas Alkiviadis",
        image: teamAsset("lykas-alkiviadis.png"),
        director: true,
      },
      {
        name: "Loukakis Giorgos-F.",
        image: teamAsset("loukakis-giorgos.png"),
      },
      {
        name: "Dimas Triantafyllos",
        image: teamAsset("dimas-triantafyllos.png"),
      },
      {
        name: "Sismanopoulou Aigli",
        image: teamAsset("sismanopoulou-aigli.png"),
      },
    ],
  },
  {
    name: "Marketing Team",
    accent: "#00d46a",
    members: [
      {
        name: "Lekka Nikoleta",
        image: teamAsset("lekka-nikoleta.png"),
        director: true,
      },
      {
        name: "Egglezopoulou Ioanna",
        image: teamAsset("egglezopoulou-ioanna.png"),
      },
      {
        name: "Soupila Marta",
        image: teamAsset("soupila-marta.png"),
      },
      {
        name: "Hajdari Kristiana",
        image: teamAsset("hajdari-kristiana.png"),
      },
      {
        name: "Polydorou Eirini",
        image: teamAsset("polydorou-eirini.png"),
      },
      {
        name: "Lin Kit",
        image: teamAsset("lin-kit.png"),
      },
    ],
  },
  {
    name: "Experience Team",
    accent: "#11dfe3",
    members: [
      {
        name: "Koutsiouba Argyrh",
        image: teamAsset("koutsiouba-argyrh.png"),
        director: true,
      },
      {
        name: "Aliftira Georgia",
        image: teamAsset("aliftira-georgia.png"),
      },
      {
        name: "Porfyris Alexandros",
        image: teamAsset("porfyris-alexandros.png"),
      },
      {
        name: "Vaggeli Eirini",
        image: teamAsset("vaggeli-eirini.png"),
      },
      {
        name: "Skordyli Eleytheria",
        image: teamAsset("skordyli-eleytheria.png"),
      },
      {
        name: "Christias Ilias",
        image: teamAsset("christias-ilias.png"),
      },
    ],
  },
  {
    name: "Speakers Team",
    accent: "#ff1493",
    members: [
      {
        name: "Mytakidis Sotiris",
        image: teamAsset("mytakidis-sotiris.png"),
      },
      {
        name: "Christou Artemis",
        image: teamAsset("christou-artemis.png"),
      },
      {
        name: "Koutsoumpa Eleni",
        image: teamAsset("koutsoumpa-eleni.png"),
      },
      {
        name: "Georga Matina",
        image: teamAsset("georga-matina.png"),
      },
    ],
  },
  {
    name: "Sponsorships Team",
    accent: "#ff4b2e",
    members: [
      {
        name: "Ntantalia Chysovalanto",
        image: teamAsset("ntantalia-chysovalanto.png"),
        director: true,
      },
      {
        name: "Kapnistou Maria",
        image: teamAsset("kapnistou-maria.png"),
      },
      {
        name: "Zoidi Georgia",
        image: teamAsset("zoidi-georgia.png"),
      },
      {
        name: "Leontarakis Iasonas",
        image: teamAsset("leontarakis-iasonas.png"),
      },
      {
        name: "Papanikolaou Evelina",
        image: teamAsset("papanikolaou-evelina.png"),
      },
    ],
  },
];
