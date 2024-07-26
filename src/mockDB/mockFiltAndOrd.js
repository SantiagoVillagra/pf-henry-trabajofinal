import sneakers from "./mockDB";

export default function filterAndOrder(checked) {
    
    const brandsToApply = Object.keys(checked.filtrosQuePaso.brands).filter(key => checked.filtrosQuePaso.brands[key])
    const sportsToApply = Object.keys(checked.filtrosQuePaso.sports).filter(key => checked.filtrosQuePaso.sports[key])
    const gendersToApply = Object.keys(checked.filtrosQuePaso.genders).filter(key => checked.filtrosQuePaso.genders[key])

    const filteredSneakers = sneakers.filter(sneaker => {
        return (
            brandsToApply.some(brandTA => brandTA === sneaker.brand) && sportsToApply.some(sportTA => sportTA === sneaker.sport) && gendersToApply.some(genderTA => genderTA === sneaker.gender)
        )
    })
    console.log(filteredSneakers);
}