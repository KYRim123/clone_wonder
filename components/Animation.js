import { useState } from 'react'

function YourComponent() {
  const products = ['dâdas', 'dâdas', 'dâdas', 'dâdas', 'dâdas', 'dâdas', 'dâdas']

  const [currentPage, setCurrentPage] = useState(0)
  const productsPerPage = 4 // Số sản phẩm hiển thị trên mỗi trang

  const totalPages = Math.ceil(products.length / productsPerPage)
  const startIndex = currentPage * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages)
  }

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages)
  }

  return (
    <div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product?.id}>{product}</div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage}>Previous</button>
        <span>
          {currentPage + 1} / {totalPages}
        </span>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  )
}

export default YourComponent
