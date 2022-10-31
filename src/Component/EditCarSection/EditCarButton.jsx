import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { putEditCar } from "../putEditCar"

const CarEditButton = (props) => {
  const { carName, carPrice, carImage, carCategory } = props
  const navigate = useNavigate()
  const param = useParams()
  const handleGoBack = () => {
    navigate()
  }
  const handleEditCar = () => {
    const id = param.id
    const data = new FormData()
    data("name", carName)
    data("category", carCategory)
    data("price", carPrice)
    data("image", carImage)
    putEditCar(data, navigate, id)
  }

  return (
    <div className="car-edit-button">
      <button onClick={handleGoBack} className="btn-outlined-primary">
        Cancel
      </button>
      <button onClick={handleEditCar} className="btn-primary">
        Save
      </button>
    </div>
  )
}

export default CarEditButton