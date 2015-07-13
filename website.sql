-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 13, 2015 at 09:52 AM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `website`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
`post_id` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
`project_id` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `tech` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `created`, `title`, `tech`, `status`, `category`, `description`) VALUES
(1, '2015-07-11 15:02:34', 'Lunar Development Site', 'AngularJS, Yeoman, PHP, Material Design, Bootstrap, Less, Slim-PHP', 'Completed', 'Website Development', 'New website to track projects, share thoughts and connect with people!'),
(2, '2015-06-15 23:00:00', 'Meridian Delta CMS', 'AngularJS, PHP, Yeoman, SASS, Bootstrap', 'Completed', 'Application Development', 'Internal CMS system with multiple arms for Design, Sales, Admin and Management teams workflow. Reporting functionality included. '),
(3, '2015-07-12 15:33:43', 'Larvae-Knight', 'Phaser, Javascript', 'Planned', 'Game Development', 'A turn based isometric grid based strategy game. Inspired by some of my favourite games of youth such as Final Fantasy Tactics Advance and Onimusha Tactics');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
 ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
 ADD PRIMARY KEY (`project_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;