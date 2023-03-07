const Card = ({ user }) => {
  return <div className='p-2 shadow-lg'>
    <p>name: {user.name.first} {user.name.last}</p>
    <p>title: {user.name.title}</p>
    <p>phone: {user.phone}</p>
    <p>email: {user.email}</p>
    <p>gender: {user.gender}</p>
    <p>age: {user.registered.age}</p>
    <p>date: {user.registered.date}</p>
    <p className='mt-2'>Addres</p>
    <p>city: {user.location.city}</p>
    <p>country: {user.location.country}</p>
    <p>postcode: {user.location.postcode}</p>
    <p>state: {user.location.state}</p>
  </div>
}
export default Card
