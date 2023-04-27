import React , {useState , useEffect} from 'react'

const Home = () => {

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getcontact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name );
      setShow(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  // let name, value;
  // const handleInputs = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;

  //   setUserName({ ...userName, [name]: value });
  // };






  return (
    <div className="text-center mt-4">
        <p className='pt-5'>WELCOME</p>
        <h1>{userName}</h1>
        <h2>{show ? "Happy, to see you back" :"We are the MERN developer"}</h2>
        <img src="https://camo.githubusercontent.com/683e2187241c641430216c864ce93fc5a0e0dfb232c5a01d1c54b54d63aa8cb2/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136323037372f73637265656e73686f74732f333834383931342f70726f6772616d6d65722e676966" alt="coder" style={{height:"400px"}} />
    </div>
  )
}

export default Home




