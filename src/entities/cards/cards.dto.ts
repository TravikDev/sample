export type CardType = {
  _id: number;
  title: string;
  description: string;
  level: number;
  salary: number;
  rph: number;
  progress: number;
  urlPicture: string;
  price: number;
  dateCreation: string;
  upgradeCost: number;
  //varind: "default" | "new" | "approved";
};

export type IUserCardType = {
  _id: number,
  level: number,
  salary: number,
  upgradeCost: number,
  card: {
    _id: number;
    title: string;
    description: string;
    level: number;
    salary: number;
    rph: number;
    progress: number;
    urlPicture: string;
    price: number;
    dateCreation: string;
    upgradeCost: number;
    //varind: "default" | "new" | "approved";
  };
}

export type CardDetailsModalProps = {
  card: {
    _id: number;
    title: string;
    level: number;
    rph: number;
    description: string;
    urlPicture: string;
  };
  onClose: () => void;
  isView: boolean;
  onClickBuyCard: (cardId: number) => void;
};
