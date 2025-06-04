// Reusable button component for category filtering
const Category = ({ children, onClick }) => {
    return (
        // Calls onClick handler when clicked
        <button className="portfolio-filter-btn" onClick={onClick}>
            {children}
        </button>
    )
}

export default Category
