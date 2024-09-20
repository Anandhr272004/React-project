import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, Table, Dropdown, Image } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
import './Adminpannel.css';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

// Dashboard Component
const Dashboard = () => {
  // Data for charts
  const lineChartData = {
    labels: ['April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 200, 400, 300, 500, 400, 600, 700, 800],
        fill: false,
        backgroundColor: '#28a745',
        borderColor: '#28a745',
      },
    ],
  };

  const barChartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
      {
        label: 'Website Views',
        data: [50, 20, 30, 15, 60, 30, 45],
        backgroundColor: '#007bff',
      },
    ],
  };

  return (
    <Container fluid className="p-5">
      <Row >
        <Col md={3} className='dash'>
          <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Categories</Card.Title>
              <Card.Text style={{ fontSize: '2rem', color: 'black' }}>1,255</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text style={{ fontSize: '2rem', color: 'black' }}>250</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Products Sold</Card.Title>
              <Card.Text style={{ fontSize: '2rem', color: 'black' }}>960</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* //fullwidth */}
      {/* <Card className='pro mt-5'> */}
      <Container className="p-4">
        <Row>
          <Col md={7}>
            <Card className="mb-4">
              <Card.Header>
                <h5>Sales by Country</h5>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Sales</th>
                      <th>Value</th>
                      <th>Bounce</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>United States</td>
                      <td>2500</td>
                      <td>$230,900</td>
                      <td>29.9%</td>
                    </tr>
                    <tr>
                      <td>Germany</td>
                      <td>3900</td>
                      <td>$440,000</td>
                      <td>40.22%</td>
                    </tr>
                    <tr>
                      <td>Great Britain</td>
                      <td>1400</td>
                      <td>$190,700</td>
                      <td>23.44%</td>
                    </tr>
                    <tr>
                      <td>Brazil</td>
                      <td>562</td>
                      <td>$143,960</td>
                      <td>32.14%</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            {/* Map Placeholder */}
            <div className="map-placeholder">
              {/* <h5>Map</h5> */}
              <Image src="./../Images/ww.jpg" className='wwimag' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>Website Views</Card.Header>
              <Card.Body>
                <Bar data={barChartData} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>Daily Sales</Card.Header>
              <Card.Body>
                <Line data={lineChartData} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>Completed Tasks</Card.Header>
              <Card.Body>
                <Line data={lineChartData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* </Card> */}

      {/* two card */}
      {/* <Row className='mt-5'>
         <Col md={6} >
           <Card className='pro1'>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
                Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text>
             </Card.Body>
           </Card>
        </Col>
         <Col md={6}>
           <Card className='pro1'>
             <Card.Img variant="top" src="holder.js/100px180" />            <Card.Body>
             <Card.Title>Card Title</Card.Title>
              <Card.Text>
                 Some quick example text to build on the card title and make up the
               bulk of the card's content.
               </Card.Text>
             </Card.Body>
           </Card>

         </Col>
       </Row> */}

    </Container>
  );
};



const EditUser = ({ users, setUsers, mode = 'edit' }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

  useEffect(() => {
    if (id) {
      const existingUser = users.find((u) => u._id === id);
      if (existingUser) {
        setUser(existingUser);
      } else {
        // If the user is not found in the state, navigate back or show a message
        navigate('/admin/users/manageuser');
      }
    }
  }, [id, users, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === 'view') return; // Prevent form submission in view mode

    try {
      if (id) {
        await axios.put(`http://localhost:5000/edituser/${id}`, user);
        const updatedUsers = users.map((u) => (u._id === id ? user : u));
        setUsers(updatedUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        window.alert('User updated successfully!');
      } else {
        const response = await axios.post('http://localhost:5000/adduser', user);
        setUsers([response.data, ...users].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        window.alert('New User Added Successfully!');
      }
      navigate('/admin/users/manageuser');
    } catch (err) {
      console.error('Error saving user:', err);
    }
  };

  return (
    <Container className="signclass">
      <Row className="signrow">
        <Col>
          <h6 className="addnew mt-2">{id ? (mode === 'view' ? 'View User' : 'Edit User') : 'Add New User'}</h6>
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group controlId="name" className="name mt-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
                className="nametext"
                disabled={mode === 'view'}
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3 name">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
                className="nametext"
                disabled={mode === 'view'}
              />
            </Form.Group>

            <Form.Group className="mt-3 name">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                placeholder="Enter Phone number"
                required
                className="nametext"
                disabled={mode === 'view'}
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3 name">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
                className="nametext"
                disabled={mode === 'view'}
              />
            </Form.Group>

            <Form.Group className="mt-3 name">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                required
                className="nametext"
                disabled={mode === 'view'}
              />
            </Form.Group>
            <div className="form-buttons">
            {mode !== 'view' ? (
              <Button type="submit" className="w-100 mt-3 addbutton">
                {id ? 'Save Changes' : 'Add User'}
              </Button>
            ) : (
              <Button type="button" className="w-100 mt-4 addbutton-secondary"  onClick={() => navigate('/admin/users/manageuser')}>
                Back
              </Button>
            )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};



// const AllUsers = ({ users, setUsers }) => {
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users');
//         setUsers(response.data.sort((a, b) => b._id.localeCompare(a._id)));
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };
//     fetchUsers();
//   }, [setUsers]);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/users/${id}`);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (err) {
//       console.error('Error deleting user:', err);
//     }
//   };

//   const handleBulkDelete = async () => {
//     try {
//       await Promise.all(selectedUsers.map((id) => axios.delete(`http://localhost:5000/users/${id}`)));
//       setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
//       setSelectedUsers([]); // Clear selected users after deletion
//     } catch (err) {
//       console.error('Error deleting users:', err);
//     }
//   };

//   const handleSelectUser = (id) => {
//     setSelectedUsers((prevSelected) =>
//       prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
//     );
//   };

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedUsers(users.map((user) => user._id)); // Select all users
//     } else {
//       setSelectedUsers([]); // Deselect all users
//     }
//   };

//   return (
//     <Container className="manage-products-container p-5">
//       <Row>
//         <Col md={12}>
//           <h2 className="text-left manageuser">Manage Users</h2>
//           {selectedUsers.length > 0 && (
//             <Button variant="danger" className="bulkdelete" onClick={handleBulkDelete}>
//               {/* Delete Selected */}
//               <MdDelete />
//             </Button>
//           )}
//           <div className="table-wrapper">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>
//                     <input
//                       type="checkbox"
//                       onChange={handleSelectAll}
//                       checked={selectedUsers.length === users.length && users.length > 0}
//                     />
//                   </th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone Number</th>
//                   <th>Password</th>
//                   <th>Confirm Password</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user._id}>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={selectedUsers.includes(user._id)}
//                         onChange={() => handleSelectUser(user._id)}
//                       />
//                     </td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.phone}</td>
//                     <td>{user.password}</td>
//                     <td>{user.confirmPassword}</td>
//                     <td>
//                       <Button
//                         variant="primary"
//                         className="mx-1"
//                         as={Link}
//                         to={`/admin/users/edituser/${user._id}`}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="danger"
//                         className="mx-1"
//                         onClick={() => handleDelete(user._id)}
//                       >
//                         Delete
//                       </Button>
//                       <Button
//                         variant="secondary"
//                         className="mx-1"
//                         as={Link}
//                         to={`/admin/users/viewuser/${user._id}?mode=view`}
//                       >
//                         {/* <FaEye /> */}
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


// without adding search button

// const AllUsers = ({ users, setUsers }) => {
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users');
//         setUsers(response.data.sort((a, b) => b._id.localeCompare(a._id)));
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };
//     fetchUsers();
//   }, [setUsers]);

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm('Are you sure you want to delete this user?');
//     if (!confirmed) return; // If user clicks 'No', return early

//     try {
//       await axios.delete(`http://localhost:5000/users/${id}`);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (err) {
//       console.error('Error deleting user:', err);
//     }
//   };

//   const handleBulkDelete = async () => {
//     const confirmed = window.confirm('Are you sure you want to delete the selected users?');
//     if (!confirmed) return; // If user clicks 'No', return early

//     try {
//       await Promise.all(selectedUsers.map((id) => axios.delete(`http://localhost:5000/users/${id}`)));
//       setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
//       setSelectedUsers([]); // Clear selected users after deletion
//     } catch (err) {
//       console.error('Error deleting users:', err);
//     }
//   };

//   const handleSelectUser = (id) => {
//     setSelectedUsers((prevSelected) =>
//       prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
//     );
//   };

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedUsers(users.map((user) => user._id)); // Select all users
//     } else {
//       setSelectedUsers([]); // Deselect all users
//     }
//   };

//   return (
//     <Container className="manage-products-container p-5">
//       <Row>
//         <Col md={12}>
//           <h2 className="text-left manageuser">Manage Users</h2>
//           {selectedUsers.length > 0 && (
//             <Button variant="danger" className="bulkdelete" onClick={handleBulkDelete}>
//               {/* Delete Selected */}
//               <MdDelete />
//             </Button>
//           )}
//           <div className="table-wrapper">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>
//                     <input
//                       type="checkbox"
//                       onChange={handleSelectAll}
//                       checked={selectedUsers.length === users.length && users.length > 0}
//                     />
//                   </th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone Number</th>
//                   <th>Password</th>
//                   <th>Confirm Password</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user._id}>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={selectedUsers.includes(user._id)}
//                         onChange={() => handleSelectUser(user._id)}
//                       />
//                     </td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.phone}</td>
//                     <td>{user.password}</td>
//                     <td>{user.confirmPassword}</td>
//                     <td>
//                       <Button
//                         variant="primary"
//                         className="mx-1"
//                         as={Link}
//                         to={`/admin/users/edituser/${user._id}`}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="danger"
//                         className="mx-1"
//                         onClick={() => handleDelete(user._id)}
//                       >
//                         Delete
//                       </Button>
//                       <Button
//                         variant="secondary"
//                         className="mx-1"
//                         as={Link}
//                         to={`/admin/users/viewuser/${user._id}?mode=view`}
//                       >
//                         {/* <FaEye /> */}
//                         View
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


///adding search bar


// const AllUsers = ({ users, setUsers }) => {
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(''); // State for search input

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users');
//         setUsers(response.data.sort((a, b) => b._id.localeCompare(a._id)));
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };
//     fetchUsers();
//   }, [setUsers]);

//   const handleDelete = async (id) => {
//     const confirmed = window.confirm('Are you sure you want to delete this user?');
//     if (!confirmed) return;

//     try {
//       await axios.delete(`http://localhost:5000/users/${id}`);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (err) {
//       console.error('Error deleting user:', err);
//     }
//   };

//   const handleBulkDelete = async () => {
//     const confirmed = window.confirm('Are you sure you want to delete the selected users?');
//     if (!confirmed) return;

//     try {
//       await Promise.all(selectedUsers.map((id) => axios.delete(`http://localhost:5000/users/${id}`)));
//       setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
//       setSelectedUsers([]);
//     } catch (err) {
//       console.error('Error deleting users:', err);
//     }
//   };

//   const handleSelectUser = (id) => {
//     setSelectedUsers((prevSelected) =>
//       prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
//     );
//   };

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedUsers(users.map((user) => user._id));
//     } else {
//       setSelectedUsers([]);
//     }
//   };

//   // Filter users based on search query (case-insensitive for name, email, and phone number)
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     user.phone.includes(searchQuery)
//   );

//   return (
//     <Container className="manage-products-container p-5">
//       <Row>
//         <Col md={12}>
//           <h2 className="text-left manageuser">Manage Users</h2>

//           {/* Search Bar */}
//           <input
//             type="text"
//             placeholder="Search by name, email, or phone number"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="searchbar"
//           />

//           {selectedUsers.length > 0 && (
//             <Button variant="danger" className="bulkdelete" onClick={handleBulkDelete}>
//               <MdDelete />
//             </Button>
//           )}

//           <div className="table-wrapper">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>
//                     <input
//                       type="checkbox"
//                       onChange={handleSelectAll}
//                       checked={selectedUsers.length === users.length && users.length > 0}
//                     />
//                   </th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone Number</th>
//                   <th>Password</th>
//                   <th>Confirm Password</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredUsers.map((user) => (
//                   <tr key={user._id}>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={selectedUsers.includes(user._id)}
//                         onChange={() => handleSelectUser(user._id)}
//                       />
//                     </td>
//                     <td>{user.name}</td>
//                     <td>{user.email}</td>
//                     <td>{user.phone}</td>
//                     <td>{user.password}</td>
//                     <td>{user.confirmPassword}</td>
//                     <td>
//                     <Button
//                         variant="secondary"
//                         className="mx-1"
//                         as={Link}
//                         to={`/admin/users/viewuser/${user._id}?mode=view`}
//                       >
//                         View
//                       </Button>
//                       <Button
//                         variant="primary"
//                         className="mx-1"
//                         as={Link}
//                         to={`/admin/users/edituser/${user._id}`}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="danger"
//                         className="mx-1"
//                         onClick={() => handleDelete(user._id)}
//                       >
//                         Delete
//                       </Button>
                     
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


///changing the view to alert box

const AllUsers = ({ users, setUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data.sort((a, b) => b._id.localeCompare(a._id)));
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, [setUsers]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  const handleBulkDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete the selected users?');
    if (!confirmed) return;

    try {
      await Promise.all(selectedUsers.map((id) => axios.delete(`http://localhost:5000/users/${id}`)));
      setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
      setSelectedUsers([]);
    } catch (err) {
      console.error('Error deleting users:', err);
    }
  };

  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user._id));
    } else {
      setSelectedUsers([]);
    }
  };

  // Filter users based on search query (case-insensitive for name, email, and phone number)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );

  // Handle view button click to display user details in an alert box
  const handleViewUser = (user) => {
    const userDetails = `
      Name: ${user.name}
      Email: ${user.email}
      Phone: ${user.phone}
      Password: ${user.password}
      Confirm Password: ${user.confirmPassword}
    `;
    window.alert(userDetails);
  };

  return (
    <Container className="manage-products-container p-5">
      <Row>
        <Col md={12}>
          <h2 className="text-left manageuser">Manage Users</h2>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by name, email, or phone number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="searchbar"
          />

          {selectedUsers.length > 0 && (
            <Button variant="danger" className="bulkdelete" onClick={handleBulkDelete}>
              <MdDelete />
            </Button>
          )}

          <div className="table-wrapper">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedUsers.length === users.length && users.length > 0}
                    />
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Password</th>
                  <th>Confirm Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user._id)}
                        onChange={() => handleSelectUser(user._id)}
                      />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.password}</td>
                    <td>{user.confirmPassword}</td>
                    <td>
                      <Button
                        variant="secondary"
                        className="mx-1"
                        onClick={() => handleViewUser(user)} // Call the handleViewUser function
                      >
                        View
                      </Button>
                      <Button
                        variant="primary"
                        className="mx-1"
                        as={Link}
                        to={`/admin/users/edituser/${user._id}`}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="mx-1"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Reports Component
const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;


// Admin Panel Component
const AdminPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '2345678901', password: 'password234', confirmPassword: 'password234' }

  ]);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'white' }}>
      <Navbar id="navebar" expand="lg" className="px-5">
        <Navbar.Brand style={{ color: 'white', fontSize: '1.6rem' }}>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
            <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <div className="sidebar-section">
              <MdSpaceDashboard className="icon" />
              <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Users</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/admin/users/addnew">Add New User</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/users/manageuser">Manage User</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="sidebar-section">
              <TbReportSearch className="icon" />
              <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
          </Nav>
        </Col>
        <Col md={10}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users/addnew" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/edituser/:id" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/manageuser" element={<AllUsers users={users} setUsers={setUsers} />} />
            <Route path="/users/viewuser/:id" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>

        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;