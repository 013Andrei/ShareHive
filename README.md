# 🌐 WebTech Final Project — Dynamic Social Media Browser (Next.js + Tailwind CSS)

## 📚 Project Description

This project is a dynamic, responsive web application built with **Next.js**, **Tailwind CSS**, and **React Query**. The app demonstrates modern frontend development practices and integrates data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), simulating core social media features.

---

## 🚀 Live Demo

🌐 **Deployed on Vercel**: https://sharehive-eta.vercel.app/
---

## 🧰 Technologies Used

- **Next.js (App Router)**
- **Tailwind CSS**
- **React Query** – for efficient, cached API fetching
- **JSONPlaceholder** – as the data source (users, posts, comments)
- **ApexCharts** – for data visualization
- **Google Maps iframe** – for embedded user location display

---

## ✅ Features

### 👤 User Listing and Profile
- Fetches all users (`/users`)
- Lists names and usernames
- Clickable user profiles (`/users/[id]`) show:
  - Full contact and company info
  - Embedded Google Map (based on geo coordinates)
  - Posts authored by that user

### 📝 Posts and Comments
- Post list view (`/posts`)
- Clickable post titles show full details (`/posts/[id]`)
- Displays comments under each post

### 📊 Dashboard with Data Visualization
- Dashboard route: `/dashboard`
- Bar chart (ApexCharts) displaying:
  - Total users
  - Total posts
  - Total comments
- Chart automatically updates when data loads

---

## 🛠️ Setup and Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/013Andrei/Sharehive.git
   cd your-repo-name
