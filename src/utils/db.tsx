export interface INavItem {
  id: number;
  name: string;
  icon: string;
}

export interface INavItems extends Array<INavItem> {}

export const NavItems: INavItems = [
  {
    id: 0,
    name: "Shower",
    icon: "shower",
  },
  {
    id: 1,
    name: "Floor",
    icon: "array",
  },
  {
    id: 2,
    name: "Settings",
    icon: "setting-lines",
  },
  {
    id: 3,
    name: "Lights",
    icon: "light-bulb",
  },
  {
    id: 4,
    name: "User",
    icon: "user",
  },
];

export interface IShower {
  id: number;
  name: string;
  icon: string;
}

export interface IShowers extends Array<IShower> {}

export const Showers: IShowers = [
  {
    id: 0,
    name: "Main",
    icon: "shower-squshed",
  },
  {
    id: 1,
    name: "Top",
    icon: "shower",
  },
  {
    id: 2,
    name: "Side",
    icon: "shower-side",
  },
];

export interface IPresetItem {
  id: number;
  name: string;
  temperature: number;
  pressure: number;
  shower: number;
}

export interface IPresetItems extends Array<IPresetItem> {}

export const PresetsItems: IPresetItems = [
  {
    id: 0,
    name: "Morning shower",
    temperature: 49,
    pressure: 80,
    shower: 0,
  },
  {
    id: 1,
    name: "Evening shower",
    temperature: 48,
    pressure: 60,
    shower: 2,
  },
  {
    id: 2,
    name: "Massage shower",
    temperature: 50,
    pressure: 80,
    shower: 1,
  },
  {
    id: 3,
    name: "Relax shower",
    temperature: 42,
    pressure: 50,
    shower: 0,
  },
  {
    id: 4,
    name: "Sauna shower",
    temperature: 42,
    pressure: 50,
    shower: 1,
  },
];
