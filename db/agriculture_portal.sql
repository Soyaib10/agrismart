-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2024 at 08:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agriculture_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(20) NOT NULL,
  `admin_name` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_password`) VALUES
(1, 'selim', 'password');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `cropname` varchar(50) NOT NULL,
  `quantity` int(50) NOT NULL,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `cropname`, `quantity`, `price`) VALUES
(86, 'soyabean', 1, 300);

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `c_id` int(11) NOT NULL,
  `c_name` varchar(100) NOT NULL,
  `c_mobile` varchar(100) NOT NULL,
  `c_email` varchar(100) NOT NULL,
  `c_address` varchar(500) NOT NULL,
  `c_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`c_id`, `c_name`, `c_mobile`, `c_email`, `c_address`, `c_message`) VALUES
(6, 'zihad', '01741129026', 'zihad10@gmail.com', 'Dhaka', 'its working');

-- --------------------------------------------------------

--
-- Table structure for table `crops`
--

CREATE TABLE `crops` (
  `Crop_id` int(255) NOT NULL,
  `Crop_name` varchar(255) NOT NULL,
  `N_value` double NOT NULL,
  `P_value` double NOT NULL,
  `K_value` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `crops`
--

INSERT INTO `crops` (`Crop_id`, `Crop_name`, `N_value`, `P_value`, `K_value`) VALUES
(1, 'Rice', 20, 25, 25),
(2, 'Potato', 50, 25, 0),
(3, 'Maize', 135, 62.5, 50),
(4, 'Cotton', 50, 25, 25),
(5, 'Soya', 20, 80, 40),
(6, 'Moong', 12.5, 25, 12.5),
(7, 'Groundnut', 25, 50, 75),
(8, 'Sugarcane', 300, 100, 200);

-- --------------------------------------------------------

--
-- Table structure for table `custlogin`
--

CREATE TABLE `custlogin` (
  `cust_id` int(20) NOT NULL,
  `cust_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `pincode` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `otp` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `custlogin`
--

INSERT INTO `custlogin` (`cust_id`, `cust_name`, `password`, `email`, `address`, `city`, `pincode`, `state`, `phone_no`, `otp`) VALUES
(19, 'selim', 'salimmia3745@gmail.coM', 'salimmia3745@gmail.com', 'satkhira', 'Satkhira', '123456', 'Khulna', '0171111111', 0);

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `DistCode` int(11) NOT NULL,
  `StCode` int(11) DEFAULT NULL,
  `DistrictName` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`DistCode`, `StCode`, `DistrictName`) VALUES
(1, 1, 'Comilla'),
(2, 1, 'Feni'),
(3, 1, 'Brahmanbaria'),
(4, 1, 'Rangamati'),
(5, 1, 'Noakhali'),
(6, 1, 'Chandpur'),
(7, 1, 'Lakshmipur'),
(8, 1, 'Chittagong'),
(9, 1, 'Coxsbazar'),
(10, 1, 'Khagrachhari'),
(11, 1, 'Bandarban'),
(12, 2, 'Sirajganj'),
(13, 2, 'Pabna'),
(14, 2, 'Bogura'),
(15, 2, 'Rajshahi'),
(16, 2, 'Natore'),
(17, 2, 'Joypurhat'),
(18, 2, 'Chapainawabganj'),
(19, 2, 'Naogaon'),
(20, 3, 'Jashore'),
(21, 3, 'Satkhira'),
(22, 3, 'Meherpur'),
(23, 3, 'Narail'),
(24, 3, 'Chuadanga'),
(25, 3, 'Kushtia'),
(26, 3, 'Magura'),
(27, 3, 'Khulna'),
(28, 3, 'Bagerhat'),
(29, 3, 'Jhenaidah'),
(30, 4, 'Jhalakathi'),
(31, 4, 'Patuakhali'),
(32, 4, 'Pirojpur'),
(33, 4, 'Barisal'),
(34, 4, 'Bhola'),
(35, 4, 'Barguna'),
(36, 5, 'Sylhet'),
(37, 5, 'Moulvibazar'),
(38, 5, 'Habiganj'),
(39, 5, 'Sunamganj'),
(40, 6, 'Narsingdi'),
(41, 6, 'Gazipur'),
(42, 6, 'Shariatpur'),
(43, 6, 'Narayanganj'),
(44, 6, 'Tangail'),
(45, 6, 'Kishoreganj'),
(46, 6, 'Manikganj'),
(47, 6, 'Dhaka'),
(48, 6, 'Munshiganj'),
(49, 6, 'Rajbari'),
(50, 6, 'Madaripur'),
(51, 6, 'Gopalganj'),
(52, 6, 'Faridpur'),
(53, 7, 'Panchagarh'),
(54, 7, 'Dinajpur'),
(55, 7, 'Lalmonirhat'),
(56, 7, 'Nilphamari'),
(57, 7, 'Gaibandha'),
(58, 7, 'Thakurgaon'),
(59, 7, 'Rangpur'),
(60, 7, 'Kurigram'),
(61, 8, 'Sherpur'),
(62, 8, 'Mymensingh'),
(63, 8, 'Jamalpur'),
(64, 8, 'Netrokona');

-- --------------------------------------------------------

--
-- Table structure for table `farmerlogin`
--

CREATE TABLE `farmerlogin` (
  `farmer_id` int(11) NOT NULL,
  `farmer_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_no` varchar(50) NOT NULL,
  `F_gender` varchar(255) NOT NULL,
  `F_birthday` varchar(255) NOT NULL,
  `F_State` varchar(255) NOT NULL,
  `F_District` varchar(255) NOT NULL,
  `F_Location` varchar(255) NOT NULL,
  `otp` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `farmerlogin`
--

INSERT INTO `farmerlogin` (`farmer_id`, `farmer_name`, `password`, `email`, `phone_no`, `F_gender`, `F_birthday`, `F_State`, `F_District`, `F_Location`, `otp`) VALUES
(60, 'selim', 'salimmia3745@gmail.coM', 'salimmia3745@gmail.com', '0171111111', 'Male', '', 'Chittagong', 'Comilla', 'salimmia3745@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `farmer_crops_trade`
--

CREATE TABLE `farmer_crops_trade` (
  `trade_id` int(11) NOT NULL,
  `farmer_fkid` int(50) NOT NULL,
  `Trade_crop` varchar(255) NOT NULL,
  `Crop_quantity` double NOT NULL,
  `costperkg` int(11) NOT NULL,
  `msp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `farmer_crops_trade`
--

INSERT INTO `farmer_crops_trade` (`trade_id`, `farmer_fkid`, `Trade_crop`, `Crop_quantity`, `costperkg`, `msp`) VALUES
(107, 60, 'jowar', 2, 2, 3),
(108, 60, 'wheat', 4, 4, 6),
(109, 60, 'soyabean', 2, 200, 300);

-- --------------------------------------------------------

--
-- Table structure for table `farmer_history`
--

CREATE TABLE `farmer_history` (
  `History_id` int(11) NOT NULL,
  `farmer_id` int(50) NOT NULL,
  `farmer_crop` varchar(255) NOT NULL,
  `farmer_quantity` int(50) NOT NULL,
  `farmer_price` int(50) NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `farmer_history`
--

INSERT INTO `farmer_history` (`History_id`, `farmer_id`, `farmer_crop`, `farmer_quantity`, `farmer_price`, `date`) VALUES
(25, 44, 'bajra', 1, 23, '01/04/2023'),
(26, 44, 'bajra', 1, 23, '03/04/2023'),
(27, 44, 'barley', 1, 2, '03/04/2023'),
(28, 44, 'arhar', 1, 60, '03/04/2023'),
(29, 44, 'bajra', 1, 23, '03/04/2023'),
(30, 44, 'barley', 1, 2, '03/04/2023'),
(31, 44, 'arhar', 1, 60, '03/04/2023');

-- --------------------------------------------------------

--
-- Table structure for table `production_approx`
--

CREATE TABLE `production_approx` (
  `crop` varchar(20) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `production_approx`
--

INSERT INTO `production_approx` (`crop`, `quantity`) VALUES
('arhar', 10),
('bajra', 2),
('barley', 8),
('cotton', 0),
('gram', 0),
('jowar', 2),
('jute', 0),
('lentil', 0),
('maize', 0),
('moong', 0),
('ragi', 0),
('rice', 0),
('soyabean', 2),
('urad', 0),
('wheat', 4);

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `StCode` int(11) NOT NULL,
  `StateName` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`StCode`, `StateName`) VALUES
(1, 'Chittagong'),
(2, 'Rajshahi'),
(3, 'Khulna'),
(4, 'Barisal'),
(5, 'Sylhet'),
(6, 'Dhaka'),
(7, 'Rangpur'),
(8, 'Mymensingh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `admin_name` (`admin_name`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cropname` (`cropname`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `crops`
--
ALTER TABLE `crops`
  ADD PRIMARY KEY (`Crop_id`);

--
-- Indexes for table `custlogin`
--
ALTER TABLE `custlogin`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`DistCode`),
  ADD KEY `StCode` (`StCode`);

--
-- Indexes for table `farmerlogin`
--
ALTER TABLE `farmerlogin`
  ADD PRIMARY KEY (`farmer_id`);

--
-- Indexes for table `farmer_crops_trade`
--
ALTER TABLE `farmer_crops_trade`
  ADD PRIMARY KEY (`trade_id`),
  ADD KEY `farmer_fkid` (`farmer_fkid`);

--
-- Indexes for table `farmer_history`
--
ALTER TABLE `farmer_history`
  ADD PRIMARY KEY (`History_id`);

--
-- Indexes for table `production_approx`
--
ALTER TABLE `production_approx`
  ADD PRIMARY KEY (`crop`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`StCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `custlogin`
--
ALTER TABLE `custlogin`
  MODIFY `cust_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `DistCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=651;

--
-- AUTO_INCREMENT for table `farmerlogin`
--
ALTER TABLE `farmerlogin`
  MODIFY `farmer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `farmer_crops_trade`
--
ALTER TABLE `farmer_crops_trade`
  MODIFY `trade_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `farmer_history`
--
ALTER TABLE `farmer_history`
  MODIFY `History_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `StCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `farmer_crops_trade`
--
ALTER TABLE `farmer_crops_trade`
  ADD CONSTRAINT `farmer_crops_trade_ibfk_1` FOREIGN KEY (`farmer_fkid`) REFERENCES `farmerlogin` (`farmer_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
