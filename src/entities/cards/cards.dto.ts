export type CardType = {
   id: number;
   name: string;
   title?: string;
   lvl: number;
   coins: number;
   coinsInHour: number;
   description: string; // добавляем описание
   image: string;
   color: string;
   variant: "default" | "new" | "approved";
 };