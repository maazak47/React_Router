import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
   const navigate = useNavigate();
  const toHome = ()=>{
      navigate("/home")
  }
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia consequuntur dicta, dolorem ipsam tenetur minima, tempora, pariatur sed labore odio. Provident voluptates hic maiores necessitatibus fuga perspiciatis dolore porro voluptatibus voluptate, enim velit sit sequi aut error cum rem voluptatem, veritatis tempore consequuntur. Tenetur officiis facere tempora doloremque sit fuga odio veritatis corrupti quam? Aliquid in similique delectus labore debitis quo hic doloremque eveniet ea ad alias amet quia optio porro fugit voluptas quos, quasi quidem, necessitatibus repudiandae. Quasi molestiae rem perferendis rerum commodi ea repudiandae sapiente error, unde distinctio expedita facere. Quas impedit, quibusdam fugit reiciendis inventore repellat?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iure odio perferendis reiciendis soluta nemo fugiat similique maiores ipsum optio blanditiis quasi, possimus ipsam autem, sequi in et, excepturi pariatur repellendus laudantium nesciunt officiis voluptas placeat natus. Necessitatibus doloremque hic voluptate exercitationem animi itaque quo dolore inventore est, commodi sint officia id odio vero sequi odit voluptatibus, architecto consequuntur aliquid ipsum eaque? Aut, neque libero! Facere distinctio quasi nemo a at aspernatur dicta porro velit sit deleniti cumque dolorem reprehenderit, maiores sint. Laboriosam atque commodi corrupti dolor est dignissimos ad provident, sit deserunt voluptatum? Assumenda, sapiente! Et aut, placeat voluptas quasi quam, eum odit obcaecati repellendus pariatur repudiandae cum nam illo ut nulla possimus dignissimos eius ullam delectus nisi aperiam ipsam officiis autem perspiciatis! Nulla a eligendi excepturi ut asperiores repellat et ratione! Facere dolorum quos quasi sapiente autem provident maiores, esse aliquam ipsum consequuntur accusantium. Nesciunt iste, mollitia fugit accusamus nostrum omnis soluta dolorum debitis voluptatibus praesentium reprehenderit quibusdam quaerat ut animi officiis, distinctio placeat, maiores perferendis! Corporis vitae facere, dolore repellat, autem sit veritatis quod inventore ducimus natus totam molestias optio distinctio est iusto reprehenderit eum tempora amet voluptatibus enim error quo nemo. Nam facilis laboriosam autem harum deleniti atque dignissimos ipsa, voluptatem, cupiditate eius minus sed nostrum dicta dolores error molestias nulla impedit? Sapiente, doloribus esse repellendus est quisquam quo quasi veniam unde! Quo facere aut nam voluptate pariatur ea similique minima nisi voluptates ducimus! Quisquam explicabo dicta fugiat, voluptas ducimus, illum ipsam optio ipsa dolorem perspiciatis facere magni accusamus vero autem laborum corporis assumenda! Quia qui eveniet dignissimos. Adipisci similique quod at laborum soluta dolores deserunt id exercitationem? Praesentium dolor hic iste quas, et autem ipsum totam id iusto ducimus adipisci, facere numquam provident reiciendis odio, quasi soluta officia suscipit. Eligendi eaque animi consequatur quaerat nemo.</p> 
      <div>
        <button onClick={toHome}>go to home</button>
      </div>
      </div>
  )
}

export default About
