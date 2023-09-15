import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { Toast, toast } from "react-toastify";
import  Axios from "axios";
import Repos from "../Components/Repo";
import { useNavigate } from "react-router-dom"; 

import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    
  } from "reactstrap";
import UserCard from "../Components/UserCard";
  

const Home = () => {

   const context = useContext(UserContext)
   const navigate = useNavigate();
   const [query, setQuery] = useState('')
    const [user, setUser] = useState(null)

    const fetchDetails = async () => {
        try {
          const response = await Axios.get(`https://api.github.com/users/${query}`);
          const data = response.data;
          setUser(data);
          console.log(data);
        } catch (error) {
          toast("Failed to find user", { type: "error" });
        }
      };
      

      if(!context.user?.uid ){
              return <h1 className="text-center mt-3 text-warning">Welcome to GitHub Search</h1>
             navigate("/signin")
      }

    
    return (
        <Container>
          <Row className="mt-3">
            <Col md="5">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Please provide the username"
                />
                <Button  
                onClick={fetchDetails}
                color="primary">Fetch User</Button>
              </InputGroup>
                    
                    {
                        user ? <UserCard user={user}></UserCard>: null
                    }

            </Col>
            <Col md="7"> 
            {
                user ? <Repos repos_url={user.repos_url}></Repos> : null
            }


            </Col>
          </Row>
        </Container>
      );
    
}

export default Home