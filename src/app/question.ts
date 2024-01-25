import { Colors } from "./colors";

export interface Question {
    frage: string,
    antworten: Colors[],
    id: string,
    bild: string;
}
