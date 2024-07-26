import sneakers from "./mockDB";

export default function filterAndOrder(checked) {
    
    const brandsToApply = Object.keys(checked.filtrosQuePaso.brands).filter(key => checked.filtrosQuePaso.brands[key]).join(" || ")
    const sportsToApply = Object.keys(checked.filtrosQuePaso.sports).filter(key => checked.filtrosQuePaso.sports[key]).join(" || ")
    const gendersToApply = Object.keys(checked.filtrosQuePaso.genders).filter(key => checked.filtrosQuePaso.genders[key]).join(" || ")

    const filteredSneakers = sneakers.filter(sneaker => {
        return (
            [`${sneaker.brand}`].includes(eval(brandsToApply)) && [`${sneaker.sport}`].includes(eval(sportsToApply)) && [`${sneaker.gender}`].includes(eval(gendersToApply))
        )
    })
    console.log(filteredSneakers);
}