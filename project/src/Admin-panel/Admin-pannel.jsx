import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Form, Table, Dropdown, Image } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdSpaceDashboard } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment'; // For date formatting
import { FaFilePdf } from "react-icons/fa";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaFileCsv } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
import './Adminpannel.css'
import './addproduct.css'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

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
    </Container>
  );
};

const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
    },
  });

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
  });

  //use effect
  useEffect(() => {
    if (id) {
      const existingUser = users.find((u) => u._id === id);
      if (existingUser) {
        setUser({
          ...existingUser,
          date: moment(existingUser.date).format('YYYY-MM-DD'),
          image: existingUser.image || '',  // Set the image correctly
        });
        setValue("name", existingUser.name);
        setValue("email", existingUser.email);
        setValue("phone", existingUser.phone);
        setValue("date", moment(existingUser.date).format('YYYY-MM-DD'));
        setValue("image", existingUser.image || "");

        // Add these lines to set the password and confirmPassword
        setValue("password", existingUser.password || "");
        setValue("confirmPassword", existingUser.confirmPassword || "");
      } else {
        navigate('/admin/users/manageuser');
      }
    }
  }, [id, users, navigate, setValue]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const maxSizeInMB = 2;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (file) {
      if (!allowedTypes.includes(file.type)) {
        alert('Only JPEG and PNG images are allowed.');
        return;
      }

      if (file.size > maxSizeInBytes) {
        alert(`File size should not exceed ${maxSizeInMB}MB.`);
        return;
      }

      setUser({ ...user, image: file }); // Store file object instead of base64
    }
  };



  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('password', data.password);
      formData.append('confirmPassword', data.confirmPassword);
      // formData.append('date', data.date);

      // Add image file if user uploaded a new one
      if ( user.image instanceof File) {
        formData.append('image', user.image); 
      }
      console.log([...formData]); // Log FormData entries to see what is being sent

      if (id) {
        await axios.put(`http://localhost:5000/edituser/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        window.alert('User updated successfully!');
      } else {
        const response = await axios.post('http://localhost:5000/api/users', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        // Handle success logic
        setUsers((prevUsers) => [response.data, ...prevUsers]);
        window.alert('User Added Successfully!');
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
          <h6 className="addnew mt-2">{id ? 'Edit User' : 'Add New User'}</h6>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
            {/* Image Upload */}


<Form.Group className="name">
  <Form.Label>Upload Image</Form.Label>
  <Form.Control
    type="file"
    name="image"
    accept="image/*"
    onChange={handleImageUpload}
    className="nametext"
  />
  
  {user.image && !(user.image instanceof File) && (
    <div className="mt-3">
      <img
        src={user.image.startsWith('data:image') ? user.image : `http://localhost:5000/uploads/${user.image}`}
        alt="Uploaded"
        style={{ width: '100px', height: '100px' }}
      />
    </div>
  )}

  {errors.image && <Form.Text className="text-danger">Image is required</Form.Text>}
</Form.Group>


            {/* Name Field */}
            <Form.Group className="mt-3 name">
              <Form.Label>Name</Form.Label>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    {...field}
                    isInvalid={!!errors.name}
                  />
                )}
                rules={{ required: 'Name is required' }}
              />
              {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mt-3 name">
              <Form.Label>Email Address</Form.Label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Form.Control
                    type="email"
                    placeholder="Enter Email Address"
                    {...field}
                    isInvalid={!!errors.email}
                    disabled={!!id} // Disable email field when editing
                  />
                )}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email format',
                  },
                }}
              />
              {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
            </Form.Group>

            {/* Phone Field */}
            <Form.Group className="mt-3 name">
              <Form.Label>Phone Number</Form.Label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <Form.Control
                    type="tel"
                    placeholder="Enter Phone number"
                    {...field}
                    isInvalid={!!errors.phone}
                    disabled={!!id} // Disable phone field when editing
                  />
                )}
                rules={{ required: 'Phone number is required' }}
              />
              {errors.phone && <Form.Text className="text-danger">{errors.phone.message}</Form.Text>}
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mt-3 name">
              <Form.Label>Password</Form.Label>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    {...field}
                    isInvalid={!!errors.password}
                  />
                )}
                rules={{
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters',
                  },
                }}
              />
              {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
            </Form.Group>

            {/* Confirm Password Field */}
            <Form.Group className="mt-3 name">
              <Form.Label>Confirm Password</Form.Label>
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                    isInvalid={!!errors.confirmPassword}
                  />
                )}
                rules={{
                  required: 'Please confirm your password',
                  validate: (value) => value === watch('password') || 'Passwords must match',
                }}
              />
              {errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword.message}</Form.Text>}
            </Form.Group>

            {/* Date Field */}
            <Form.Group className="mt-3 name">
              <Form.Label>Date</Form.Label>
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <Form.Control
                    type="date"
                    {...field}
                    isInvalid={!!errors.date}
                  />
                )}
                rules={{ required: 'Date is required' }}
              />
              {errors.date && <Form.Text className="text-danger">{errors.date.message}</Form.Text>}
            </Form.Group>

            <Button type="submit" className="w-100 mt-3 addbutton">
              {id ? 'Save Changes' : 'Add User'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


const AllUsers = ({ users, setUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5); // Default 5 users per page

  // Fetching users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data.reverse()); // Reverse the array to have the newest at the top
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, [setUsers]);

  // Handle user deletion
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

  // Handle bulk delete
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

  // Handle select user
  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
    );
  };

  // Handle select all users
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user._id));
    } else {
      setSelectedUsers([]);
    }
  };

  // Handle viewing user details
  const handleViewUser = (user) => {
    const userDetails = `
      Name: ${user.name}
      Email: ${user.email}
      Phone: ${user.phone}
       Date: ${user.date}
      Password: ${user.password}
      Confirm Password: ${user.confirmPassword}
    `;
    window.alert(userDetails);
  };

  // Filtering users based on search query and date range
  const filteredUsers = users.filter((user) => {
    const userDate = new Date(user.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (
      (!from || userDate >= from) &&
      (!to || userDate <= to) &&
      ((user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.phone && user.phone.includes(searchQuery)))
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUsersPerPageChange = (e) => {
    setUsersPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 when changing number of users per page
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Selected filtered users
  const selectedFilteredUsers = currentUsers.filter((user) => selectedUsers.includes(user._id));

  // PDF Export with only selected users
  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableData = (selectedFilteredUsers.length ? selectedFilteredUsers : currentUsers).map((user, index) => [
      index + 1,
      user.name,
      user.email,
      user.phone,
      moment.utc(user.date).local().format('DD/MM/YYYY'),
      user.password,
    ]);

    doc.autoTable({
      head: [['S.No', 'Name', 'Email', 'Phone', 'Date', 'Password']],
      body: tableData,
    });
    doc.save('users_data.pdf');
  };

  // Excel Export with only selected users
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      (selectedFilteredUsers.length ? selectedFilteredUsers : currentUsers).map((user, index) => ({
        S_No: index + 1,
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
        Password: user.password,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, 'users_data.xlsx');
  };

  // CSV Export with only selected users
  const downloadCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      (selectedFilteredUsers.length ? selectedFilteredUsers : currentUsers).map((user, index) => ({
        S_No: index + 1,
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
        Password: user.password,
      }))
    );
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'users_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="manage-products-container p-5">
      <Row>
        <Col md={12}>
          {selectedUsers.length > 0 && (
            <Button variant="danger" className="bulkdelete" onClick={handleBulkDelete}>
              Delete Selected ({selectedUsers.length})
            </Button>
          )}
          <h2 className="text-left manageuser">Manage Users</h2>
          <div className='down mt-4'>
            <div className="filter-container">

              <div className="filter"  >
                <Form.Control
                  type="text"
                  placeholder="Enter Name / E-mail / Phone Number"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="searchbar"
                />|

                {/* Date Range Filter */}
                <div className="date-filter" style={{ display: 'flex', gap: '10px' }}>
                  <Form.Control
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="date searchbar"
                  />
                  <Form.Control
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="date searchbar"
                  />
                </div>
              </div>

              {/* Users Per Page Dropdown */}
              <div className='drop'>
                <label htmlFor="usersPerPage" className='user' >Users per page: </label>
                <select id="usersPerPage" value={usersPerPage} onChange={handleUsersPerPageChange}>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                </select>


                {/* Icons for PDF, Excel, CSV */}
                <div className="icons">
                  <FaFilePdf className="pdf-icon" onClick={downloadPDF} />
                  <PiMicrosoftExcelLogoFill className="excel-icon" onClick={downloadExcel} />
                  <FaFileCsv className="csv-icon" onClick={downloadCSV} />
                </div>
              </div>
            </div>
          </div>

          {/* User Table */}
          <Table striped bordered hover className="product-table mt-3">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedUsers.length === users.length}
                  />
                </th>
                <th>S.No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Password</th>
                {/* <th>Confirm Password</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user._id)}
                      onChange={() => handleSelectUser(user._id)}
                    />
                  </td>
                  <td>{indexOfFirstUser + index + 1}</td>
               
                  <td>
                    {user.image ? (
                      <img
                        src={`data:image/jpeg;base64,${user.image}`}
                        alt="user"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                    ) : (
                      'No Image'
                    )}
                  </td>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{moment.utc(user.date).local().format('DD/MM/YYYY')}</td>
                  <td>{user.password}</td>
                  {/* <td>{user.confirmPassword}</td> */}
                  <td>
                    <Button variant="secondary" className="mx-1" onClick={() => handleViewUser(user)}>
                      View
                    </Button>
                    <Button as={Link} to={`/admin/users/edituser/${user._id}`} variant="primary" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(user._id)} className="mx-1">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination Controls */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                variant={index + 1 === currentPage ? 'primary' : 'secondary'}
                className="mx-1"
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};



const Siginuser = ({ users, setUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5); // Default 5 users per page

  // Fetching users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5002/users');
        setUsers(response.data.reverse()); // Reverse the array to have the newest at the top
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, [setUsers]);

  // Handle user deletion
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5002/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  // Handle bulk delete
  const handleBulkDelete = async () => {
    const confirmed = window.confirm('Are you sure you want to delete the selected users?');
    if (!confirmed) return;

    try {
      await Promise.all(selectedUsers.map((id) => axios.delete(`http://localhost:5002/users/${id}`)));
      setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
      setSelectedUsers([]);
    } catch (err) {
      console.error('Error deleting users:', err);
    }
  };

  // Handle select user
  const handleSelectUser = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
    );
  };

  // Handle select all users
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user._id));
    } else {
      setSelectedUsers([]);
    }
  };

  // Handle viewing user details
  const handleViewUser = (user) => {
    const userDetails = `
      Name: ${user.name}
      Email: ${user.email}
      Phone: ${user.phone}
       Date: ${user.date}
      Password: ${user.password}
      Confirm Password: ${user.confirmPassword}
    `;
    window.alert(userDetails);
  };

  // Filtering users based on search query and date range
  const filteredUsers = users.filter((user) => {
    const userDate = new Date(user.date);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (
      (!from || userDate >= from) &&
      (!to || userDate <= to) &&
      ((user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (user.phone && user.phone.includes(searchQuery)))
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUsersPerPageChange = (e) => {
    setUsersPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 when changing number of users per page
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Selected filtered users
  const selectedFilteredUsers = currentUsers.filter((user) => selectedUsers.includes(user._id));

  // PDF Export with only selected users
  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableData = (selectedFilteredUsers.length ? selectedFilteredUsers : currentUsers).map((user, index) => [
      index + 1,
      user.name,
      user.email,
      user.phone,
      moment.utc(user.date).local().format('DD/MM/YYYY'),
      user.password,
    ]);

    doc.autoTable({
      head: [['S.No', 'Name', 'Email', 'Phone', 'Date', 'Password']],
      body: tableData,
    });
    doc.save('users_data.pdf');
  };

  // Excel Export with only selected users
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      (selectedFilteredUsers.length ? selectedFilteredUsers : currentUsers).map((user, index) => ({
        S_No: index + 1,
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
        Password: user.password,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, 'users_data.xlsx');
  };

  // CSV Export with only selected users
  const downloadCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      (selectedFilteredUsers.length ? selectedFilteredUsers : currentUsers).map((user, index) => ({
        S_No: index + 1,
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
        Password: user.password,
      }))
    );
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'users_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="manage-products-container p-5">
      <Row>
        <Col md={12}>
          {selectedUsers.length > 0 && (
            <Button variant="danger" className="bulkdelete" onClick={handleBulkDelete}>
              Delete Selected ({selectedUsers.length})
            </Button>
          )}
          <h2 className="text-left manageuser">Logined Users</h2>
          <div className='down mt-4'>
            <div className="filter-container">

              <div className="filter"  >
                <Form.Control
                  type="text"
                  placeholder="Enter Name / E-mail / Phone Number"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="searchbar"
                />|

                {/* Date Range Filter */}
                <div className="date-filter" style={{ display: 'flex', gap: '10px' }}>
                  <Form.Control
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="date searchbar"
                  />
                  <Form.Control
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="date searchbar"
                  />
                </div>
              </div>

              {/* Users Per Page Dropdown */}
              <div className='drop'>
                <label htmlFor="usersPerPage" className='user' >Users per page: </label>
                <select id="usersPerPage" value={usersPerPage} onChange={handleUsersPerPageChange}>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                </select>


                {/* Icons for PDF, Excel, CSV */}
                <div className="icons">
                  <FaFilePdf className="pdf-icon" onClick={downloadPDF} />
                  <PiMicrosoftExcelLogoFill className="excel-icon" onClick={downloadExcel} />
                  <FaFileCsv className="csv-icon" onClick={downloadCSV} />
                </div>
              </div>
            </div>
          </div>

          {/* User Table */}
          <Table striped bordered hover className="product-table mt-3">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedUsers.length === users.length}
                  />
                </th>
                <th>S.No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Password</th>
                {/* <th>Confirm Password</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user._id)}
                      onChange={() => handleSelectUser(user._id)}
                    />
                  </td>
                  <td>{indexOfFirstUser + index + 1}</td>
               
                  <td>
                    {user.image ? (
                      <img
                        src={`data:image/jpeg;base64,${user.image}`}
                        alt="user"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                    ) : (
                      'No Image'
                    )}
                  </td>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{moment.utc(user.date).local().format('DD/MM/YYYY')}</td>
                  <td>{user.password}</td>
                  {/* <td>{user.confirmPassword}</td> */}
                  <td>
                    <Button variant="secondary" className="mx-1" onClick={() => handleViewUser(user)}>
                      View
                    </Button>
                    <Button as={Link} to={`/admin/users/edituser/${user._id}`} variant="primary" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(user._id)} className="mx-1">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Pagination Controls */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                variant={index + 1 === currentPage ? 'primary' : 'secondary'}
                className="mx-1"
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};


const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(''); // New state for description
  const [imageBase64, setImageBase64] = useState('');
  const [imagePreview, setImagePreview] = useState(null); // State to hold image preview

  // Function to handle image upload and convert it to base64
  const handleImageUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
          setImageBase64(reader.result);
          setImagePreview(reader.result); // Set the preview image
      };
      reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await axios.post('http://localhost:5001/api/products', { name, price, description,imageBase64 });
          alert('Product added successfully!');
          // Clear form fields after submission
          setName('');
          setPrice('');
          setDescription(''); // Reset description
          setImageBase64('');
          setImagePreview(null); // Clear the image preview
      } catch (error) {
          console.error('Error adding product:', error);
      }
  };

  return (
      <form className="unique-add-product-form" onSubmit={handleSubmit}>
      <div className="unique-form-group">
      <h2 className="addnewproducts">Add New Products</h2>
          <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
          />
      </div>
      <div className="unique-form-group">
          <input
              type="number"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
          />
      </div>
      <textarea placeholder="Product Description"
       value={description} 
       onChange={(e) => setDescription(e.target.value)} 
       required
        /> {/* New Description field */}
      <div className="unique-form-group">
          <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              required
          />
      </div>
      {/* Display the selected image */}
      {imagePreview && (
          <div className="unique-image-preview">
              <img src={imagePreview} alt="Selected product" />
          </div>
      )}
      <button type="submit" className="unique-submit-button">Add Product</button>
  </form>
  );
};




const ProductTable = () => {
  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null); // Track which product is being edited
  const [editedData, setEditedData] = useState({ name: '', price: '', description: '' }); // Store edited data

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        setProducts(response.data.reverse());
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    // Set the product being edited and pre-fill the form with current values
    setEditingProduct(product._id);
    setEditedData({
      name: product.name,
      price: product.price,
      description: product.description,
    });
  };

  const handleSave = async (productId) => {
    if (!editedData.name || !editedData.price || !editedData.description) {
      alert('All fields must be filled!');
      return;
    }
    try {
      // Update the product in the database
      await axios.put(`http://localhost:5001/api/products/${productId}`, editedData);

      // Update the product in the local state
      setProducts(products.map((product) => 
        product._id === productId ? { ...product, ...editedData } : product
      ));

      // Clear editing mode
      setEditingProduct(null);
      setEditedData({ name: '', price: '', description: '' });
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Container>
      <h2 className="text-left manageuser mt-5">Products Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>
                {product.imageBase64 ? (
                  <img
                    src={product.imageBase64}
                    alt={product.name}
                    style={{ width: '50px', height: '50px', objectFit: 'cover', justifyContent: 'center', borderRadius: '5px' }}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              {/* Editable product name */}
              <td>
                {editingProduct === product._id ? (
                  <input
                    type="text"
                    value={editedData.name}
                    onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                  />
                ) : (
                  product.name
                )}
              </td>
              {/* Editable price */}
              <td>
                {editingProduct === product._id ? (
                  <input
                    type="number"
                    value={editedData.price}
                    onChange={(e) => setEditedData({ ...editedData, price: e.target.value })}
                  />
                ) : (
                  product.price
                )}
              </td>
              {/* Editable description */}
              <td>
                {editingProduct === product._id ? (
                  <input
                    type="text"
                    value={editedData.description}
                    onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                  />
                ) : (
                  product.description
                )}
              </td>
              <td>
                {/* Save button to save the edited product */}
                {editingProduct === product._id ? (
                  <Button variant="success" onClick={() => handleSave(product._id)}>Save</Button>
                ) : (
                  <Button variant="warning" onClick={() => handleEdit(product)}>Edit</Button>
                )}
                <Button variant="danger" style={{ marginLeft: '8px' }} onClick={() => handleDelete(product._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};


const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;



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
              <AiOutlineProduct className="icon" />
              <Nav.Link as={Link} to="/admin/users/siginusers" className="text-white">Logined users</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Add Products</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/admin/AddProducts">Add New Products</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/Productstable">Products Table</Dropdown.Item>
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
            <Route path="/users/siginusers" element={<Siginuser users={users} setUsers={setUsers} />} />
            <Route path="/AddProducts" element={<AddProduct />} />
            <Route path="/Productstable" element={<ProductTable />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>

        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;