<template>
  <div class="welcome-wrap">
    <h1 class="welcome-title">Welcome to Numerix Maths</h1>
    <RouterLink to="/home" class="welcome-btn">Enter Dashboard</RouterLink>
  </div>
</template>

<style scoped>
.welcome-wrap {
  text-align: center;
}

.welcome-title {
  font-size: 38px;
  font-weight: 800;
  margin: 0 0 28px;
  color: #0f172a;
}

.welcome-btn {
  display: inline-flex;
  padding: 14px 30px;
  border-radius: 12px;
  background: #2563eb;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
}
</style>
