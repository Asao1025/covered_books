
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import CategoryButton from './categoryButton'

const categoryList = [
    {categoryName:'ミステリー',categoryCode:'01'},
    {categoryName:'ファンタジー',categoryCode:'02'}
    ]


const categoryButtons = categoryList.map((category) => (
    <CategoryButton categoryName={category.categoryName} key={category.categoryCode} />
))

export default function CategoryButtons() {
    return(
        <div>
            {categoryButtons}
        </div>
        )
    }