import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 导出静态文件
  distDir: 'out',    // 输出目录
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
};

export default nextConfig;
