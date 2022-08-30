
import 'bootstrap/dist/css/bootstrap.min.css';
import{Container, Row, Col} from 'react-bootstrap';
import DetailsCard from './components/detailsCard/DetailsCard';
import Search from './components/search/Search';
 import UserCard from './components/userCard/UserCard';
 import FollowersCard from './components/followersCard/FollowersCard';
import {useState} from 'react';

function App() {
  const[user, setUser] = useState({}) 
  return (
    <>
    <Container className="mt-5">
        <>
          <Search />
          <DetailsCard setUser={setUser} user={user} />
          <Row>
          <Col md={6}> <UserCard setUser={setUser} user={user} /> </Col>
          <Col md={6}> <FollowersCard  /> </Col>
          </Row>
        </>
      </Container>
    </>
  );
}

export default App;
