<template>
  <section class="team-page">
    <div class="page-header">
      <div class="page-title">
        <i class="fa-solid fa-people-group"></i>
        <h1>Meet the Team</h1>
      </div>
      <p>
        A collaborative team where every member contributed to designing,
        developing, and testing the Numerix Maths platform.
      </p>
    </div>

    <div class="team-summary">
      <div class="summary-card">
        <i class="fa-solid fa-user-group"></i>
        <div>
          <h2>{{ teamMembers.length }}</h2>
          <p>Team Members</p>
        </div>
      </div>
      <div class="summary-card">
        <i class="fa-solid fa-diagram-project"></i>
        <div>
          <h2>Shared</h2>
          <p>Design, Code & Test</p>
        </div>
      </div>
      <div class="summary-card">
        <i class="fa-solid fa-code"></i>
        <div>
          <h2>CoreWave</h2>
          <p>Digital Team</p>
        </div>
      </div>
    </div>

    <div class="section-pill">
      <i class="fa-solid fa-address-card"></i><span>Team Profiles</span>
    </div>

    <div class="team-grid">
      <article v-for="member in teamMembers" :key="member.id" class="team-card">
        <div class="team-card-top" :class="member.bannerClass">
          <img :src="member.image" :alt="member.name" class="team-photo" />
          <span class="role-badge">{{ member.shortRole }}</span>
        </div>
        <div class="team-card-content">
          <h3>{{ member.name }}</h3>
          <p class="member-role">
            <i class="fa-solid fa-user-tie"></i>{{ member.role }}
          </p>
          <p class="member-bio">{{ member.bio }}</p>
          <div class="member-tags">
            <span v-for="tag in member.tags" :key="tag" class="member-tag">{{
              tag
            }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const teamMembers = [
  {
    id: 1,
    name: "Daniel",
    role: "Project Lead",
    shortRole: "LEAD",
    bio: "Led planning and coordination to keep the project on track. Also contributed to designing, coding, and testing the website alongside the team.",
    image: "/images/team-member-1.svg",
    bannerClass: "banner-blue",
    tags: [
      "Leadership",
      "Planning",
      "Team Coordination",
      "Design",
      "Development",
      "Testing",
    ],
  },
  {
    id: 2,
    name: "Yohan",
    role: "Security & QA Lead",
    shortRole: "QA",
    bio: "Focused on testing and improving reliability to ensure a smooth user experience. Also supported design, development, and testing across the project.",
    image: "/images/team-member-2.svg",
    bannerClass: "banner-green",
    tags: ["Testing", "Quality Assurance", "Security", "Design", "Development"],
  },
  {
    id: 3,
    name: "Alex",
    role: "Frontend Lead",
    shortRole: "UI",
    bio: "Led the visual design and user interface, creating a clean and responsive experience. Contributed to coding, testing, and overall development.",
    image: "/images/team-member-3.svg",
    bannerClass: "banner-orange",
    tags: ["Frontend", "UI Design", "Responsiveness", "Development", "Testing"],
  },
  {
    id: 4,
    name: "Deivydas",
    role: "Logic & Interactivity Lead",
    shortRole: "LOGIC",
    bio: "Developed interactive features such as lessons and quizzes, helping bring the platform to life. Also contributed to design, coding, and testing.",
    image: "/images/team-member-4.svg",
    bannerClass: "banner-purple",
    tags: [
      "Logic",
      "Interactivity",
      "Problem Solving",
      "Development",
      "Testing",
    ],
  },
  {
    id: 5,
    name: "Kai",
    role: "Content & Integration Support",
    shortRole: "CONTENT",
    bio: "Organised content and supported integration across the platform. Worked with the team on design, development, and testing to ensure consistency.",
    image: "/images/team-member-5.svg",
    bannerClass: "banner-yellow",
    tags: ["Content", "Integration", "Structure", "Design", "Testing"],
  },
];
</script>

<style scoped>
.team-page {
  min-height: 100%;
  padding: 32px;
  background: transparent;
}
.page-header {
  margin-bottom: 28px;
}
.page-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}
.page-title i {
  font-size: 2rem;
  color: #2f66e8;
}
.page-header h1 {
  margin: 0;
  font-size: 2.4rem;
  line-height: 1;
  color: #14213d;
}
.page-header p {
  margin: 0;
  color: #4f6481;
  font-size: 1.02rem;
  font-weight: 500;
  max-width: 760px;
}
.team-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 28px;
}
.summary-card {
  background: #fff;
  border: 1px solid #d8e0ea;
  border-radius: 24px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(31, 47, 70, 0.04);
}
.summary-card i {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #edf4ff;
  color: #2f66e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.summary-card h2 {
  margin: 0;
  font-size: 1.7rem;
  color: #14213d;
}
.summary-card p {
  margin: 4px 0 0;
  color: #5f718c;
  font-weight: 600;
}
.section-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
  padding: 12px 20px;
  border: 2px solid #bcd3ff;
  border-radius: 999px;
  color: #2f66e8;
  background: #f4f8ff;
  font-weight: 700;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}
.team-card {
  background: #fff;
  border: 1px solid #d8e0ea;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(31, 47, 70, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(31, 47, 70, 0.08);
}
.team-card-top {
  position: relative;
  height: 220px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 24px;
  border-bottom: 1px solid #d8e0ea;
}
.banner-blue {
  background: #dfeaf9;
}
.banner-green {
  background: #deefe2;
}
.banner-orange {
  background: #f3e5cf;
}
.banner-purple {
  background: #ece4f6;
}
.banner-yellow {
  background: #f9f1d6;
}
.team-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid rgba(255, 255, 255, 0.75);
  background: #fff;
}
.role-badge {
  position: absolute;
  top: 18px;
  right: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f4f5f7;
  color: #23395d;
  border: 1px solid #cfd8e6;
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 0.88rem;
  font-weight: 800;
}
.team-card-content {
  padding: 24px;
}
.team-card-content h3 {
  margin: 0 0 10px;
  color: #14213d;
  font-size: 1.3rem;
}
.member-role {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  color: #2f66e8;
  font-weight: 700;
}
.member-bio {
  margin: 0 0 18px;
  color: #5b6e88;
  font-size: 1rem;
  line-height: 1.65;
  min-height: 110px;
}
.member-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.member-tag {
  display: inline-block;
  background: #eef3fb;
  color: #2f66e8;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 800;
}
@media (max-width: 900px) {
  .team-summary {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .team-page {
    padding: 20px;
  }
  .page-header h1 {
    font-size: 2rem;
  }
  .team-card-top {
    height: 200px;
  }
  .team-photo {
    width: 130px;
    height: 130px;
  }
}
</style>
