-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 01, 2022 at 03:12 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `contact_number` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `contact_name`, `contact_number`, `customer_id`, `updated_at`, `created_at`) VALUES
(1, 'test', 454545454, 5, '2022-02-01 00:24:37', '2022-02-01 00:24:41'),
(2, 'dfdf', 3434343, 5, '2022-01-31 18:46:36', '2022-01-31 18:46:36'),
(3, 'dfdf', 3434343, 5, '2022-01-26 18:46:36', '2022-01-26 18:46:36'),
(4, 'dfdf', 3434343, 5, '2021-12-15 18:46:36', '2021-12-15 18:46:36');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(10) UNSIGNED NOT NULL,
  `customer_code` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_designation` varchar(150) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_code` varchar(30) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `mobile_number` varchar(255) DEFAULT NULL,
  `master_company_id` int(11) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `office_contact_number` varchar(255) DEFAULT NULL,
  `offer_email` varchar(255) DEFAULT NULL,
  `optional_emails` text,
  `access_token` varchar(255) DEFAULT NULL,
  `access_token_time` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted` int(11) NOT NULL DEFAULT '0',
  `deleted_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_code`, `customer_name`, `customer_designation`, `customer_email`, `region_id`, `password`, `phone_code`, `dob`, `mobile_number`, `master_company_id`, `company_name`, `company_address`, `office_contact_number`, `offer_email`, `optional_emails`, `access_token`, `access_token_time`, `status`, `deleted`, `deleted_at`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(2, 'CID_2', 'Getaye Kebede', 'manager', 'test2@yopmail.com', 1, '$2y$10$X1/PiwB7yYP0wW0O9hLNmOGqgIeF5hTGMTkrodr.0YWkfmgyk6GTy', NULL, NULL, '+251251929902098', NULL, 'Lousi Dreyfus Company', 'Addis Ababa', '+2512510116476958', 'test@yopmail.com', 'test1@yopmail.com', '', '2019-09-30 10:16:30', 1, 0, NULL, '2019-09-30 10:16:30', NULL, 1, NULL),
(3, 'CID_3', 'Tsega Melese', 'agent', 'test2@yopmail.com', 1, '$2y$10$goJA85WfIE1PhIhJjvbotOUDRi4L.9AjesBRNLkJDfD2fOvtAfXsS', NULL, NULL, '+251251924356725', NULL, 'Keffa Coffee', 'Addis Ababa', '+251251924356725', 'test@yopmail.com', 'test1@yopmail.com', NULL, NULL, 1, 0, NULL, '2019-09-30 13:51:36', NULL, 1, NULL),
(4, 'CID_4', 'Eyoel Wubayehu', 'agent', 'test2@yopmail.com', 1, '$2y$10$QtQIs2sVxRO98Fic6Gh.hu0m0Bv78ls1xSJR584Ae6ulW9G/hPfJy', NULL, NULL, '+251912125278', NULL, 'Falcon Logistics', 'Addis Ababa', '+251912125278', 'test@yopmail.com', 'test1@yopmail.com', '', '2019-09-30 13:54:42', 1, 0, NULL, '2019-09-30 13:54:42', NULL, 1, NULL),
(5, 'CID_5', 'Kevin', 'agent', 'test2@yopmail.com', 1, '$2y$10$3WcpO3ML71P18YTJQfnlxucR3fapsYPRZnfLDnqwfikC7.tV.p04G', NULL, NULL, '+8618616838662', NULL, 'kevin Zhu', 'china', '+8618616838662', 'test@yopmail.com', 'test1@yopmail.com', '', '2019-09-30 13:59:49', 1, 0, NULL, '2019-09-30 13:59:49', NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `old_user_id` int(11) DEFAULT NULL,
  `enable_web_login` tinyint(4) NOT NULL DEFAULT '1',
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email_id` varchar(200) DEFAULT NULL,
  `phone_code` varchar(30) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `department` int(11) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `profile_image` varchar(200) DEFAULT NULL,
  `role_id` int(11) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `employee_id` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `deleted` int(11) NOT NULL DEFAULT '0',
  `deleted_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `forgot_token` varchar(255) DEFAULT NULL,
  `forgot_token_time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `old_user_id`, `enable_web_login`, `first_name`, `last_name`, `email_id`, `phone_code`, `phone_number`, `department`, `username`, `password`, `profile_image`, `role_id`, `designation`, `employee_id`, `status`, `deleted`, `deleted_at`, `created_at`, `updated_at`, `created_by`, `updated_by`, `forgot_token`, `forgot_token_time`) VALUES
(473, 0, 0, 'Abera', 'Begi', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(474, 0, 0, 'Meseret', 'Tulu', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(475, 0, 0, 'Mekuria', 'Admike', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(476, 0, 0, 'Mekuria', 'Admike', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(477, 0, 0, 'Wendimu', 'Kebede', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(478, 0, 0, 'Bedilu', 'Habtamu', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(479, 0, 0, 'Yohennis', 'Kelbessa', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(480, 0, 0, 'Godana', 'Tune', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(481, 0, 0, 'Jemal', 'Kedir', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(482, 0, 0, 'Abdisa', 'Tariku', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(483, 0, 0, 'Elias', 'Demeke', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(484, 0, 0, 'Megersa', 'Diribsa', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(485, 0, 0, 'Jiregna', 'Dinsa', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(486, 0, 0, 'Bayisa', 'Guye', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(487, 0, 0, 'Desalegn', 'Dukale', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(488, 0, 0, 'Girma', 'Gobena', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(489, 0, 0, 'Worku', 'Asefa', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(490, 0, 0, 'Yerosan', 'Bekele', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(491, 0, 0, 'Yemane Dagmawi', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(492, 0, 0, 'Kevin Cook', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(493, 0, 0, 'Greg', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(494, 0, 0, 'Anajiya', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(495, 0, 0, 'Dhuga Buna', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(496, 0, 0, 'Zawadi', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(497, 0, 0, 'Ankels', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(498, 0, 0, 'Sajan BBBB', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 17, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(499, 0, 0, 'Sajan', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 16, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(500, 0, 1, 'Super Admin', 'test', 'superadmin@yopmail.com', NULL, '234132515', NULL, 'superadmin@yopmail.com', '$2y$10$qABrJcR.H4nJ7Nz1g0LYf.7ChO8njoC5SLiOax5hvIwzjYsREiV2S', 'default.png', 1, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, '9lm43lpY3gGKvemz', '1616388837'),
(501, 0, 0, 'Shibu', '', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 16, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(502, 0, 0, 'Abdi Alemayew', 'Abdi', 'mig_emp@gmail.com', NULL, NULL, NULL, 'mig_emp@gmail.com', 'mig_pass', 'default.png', 16, NULL, NULL, 1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=972;
