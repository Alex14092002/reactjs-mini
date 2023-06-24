const routes = {
    '/home': () => {
      // Xử lý hiển thị trang chủ
    },
    '/about': () => {
      // Xử lý hiển thị trang giới thiệu
    },
    // Thêm các tuyến đường khác tùy ý
  };
  
  const navigate = (path) => {
    // Xử lý chuyển đổi tuyến đường và gọi hành động tương ứng
    const route = routes[path];
    if (route) {
      route();
    } else {
      // Xử lý khi tuyến đường không tồn tại
    }
  };
  
  export { navigate };
  