import { Office } from "../types/office.types";

const officeName = [
    "image 1",
    "image 2",
    "image 3"
];

export const office: Office [] = officeName.map ((image, i) => {
    return{
        id: i + 1,
        image: `/assets/images/thumbnails/thumbnail-details-${(i % 3) + 1}.png`
    };
});