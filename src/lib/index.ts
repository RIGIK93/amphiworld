// place files you want to import through the `$lib` alias in this folder.

export interface Question2 {
    img: string
    answer: AnswerOption
}

export type AnswerOption = "first" | "second"

// Shuffles an array
export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array
}