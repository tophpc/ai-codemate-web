# AICodeMate 品牌 VI 完整规范

**版本：** 2.0 - 全面融合版  
**创建时间：** 2026-03-16  
**最后更新：** 2026-03-16

---

## 🎯 品牌定位

### 品牌名称
**AICodeMate** = AI + Code + Mate

### 中文名称
**智码伙伴**

### 品牌标语
**主标语：** 智码伙伴 · 编程未来  
**副标语：** 让每个开发者都拥有 AI 超能力

### 品牌愿景
让 AI 成为每个开发者的超能力，不是替代，而是增强。

### 核心价值观
- 🤝 **陪伴** - 做开发者的 AI 伙伴（温暖）
- 🚀 **未来** - 引领 AI 编程新时代（科技）
- 💡 **智慧** - 让编程更智能、更高效（专业）
- 🌍 **开放** - 面向全球开发者（包容）

---

## 🎨 Logo 系统

### 1. 主 Logo（完整版）
**文件：** `/public/logo-full.svg`

**构成元素：**
- 代码符号 `<>` - 代表编程本质
- 六边形 AI 大脑 - 代表人工智能
- 能量粒子 - 代表创新活力
- 品牌文字 - AICodeMate
- 蓝紫渐变 - 科技与未来

**使用场景：**
- 网站首页
- 官方文档
- 宣传材料

**最小尺寸：** 120px 宽度

---

### 2. 品牌 Logo（简化版）
**文件：** `/public/logo.svg`

**构成：**
- 图形 + 文字组合
- 保持品牌识别度
- 适合中等尺寸展示

**使用场景：**
- 导航栏
- 社交媒体
- 邮件签名

**最小尺寸：** 48px 高度

---

### 3. 图标版本（Favicon）
**文件：** `/public/favicon.svg`

**尺寸：** 64x64px

**构成：**
- 简化 Logo 图形
- 保持品牌识别
- 适配小尺寸显示

**使用场景：**
- 浏览器标签页
- 书签图标
- 移动端主屏幕
- APP 图标

---

### 4. 单色版本
**文件：** `/public/logo-mono.svg`

**颜色：**
- 白色版本 - 深色背景
- 黑色版本 - 浅色背景

**使用场景：**
- 单色印刷
- 刺绣/雕刻
- 特殊材质

---

## 🌈 色彩系统

### 主色系（科技 + 温暖融合）

| 颜色名称 | 色值 | RGB | 用途 |
|---------|------|-----|------|
| **Brand Blue** | `#0066FF` | 0,102,255 | 主色、按钮、链接 |
| **AI Purple** | `#7B2CFF` | 123,44,255 | 辅助色、渐变 |
| **Energy Orange** | `#FF9500` | 255,149,0 | 强调色、高亮 |
| **Warm Amber** | `#FFB800` | 255,184,0 | 温暖强调 |

### 渐变色系统

```css
/* 品牌渐变 - 科技感 */
--brand-gradient: linear-gradient(135deg, #0066FF 0%, #7B2CFF 100%);

/* 温暖渐变 - 伙伴感 */
--warm-gradient: linear-gradient(135deg, #FF9500 0%, #FFB800 100%);

/* Hero 渐变 - 融合 */
--hero-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 强调渐变 */
--accent-gradient: linear-gradient(135deg, #FF9500 0%, #FF6B35 100%);

/* 背景渐变 */
--bg-gradient: linear-gradient(135deg, #0A0E27 0%, #1A1A2E 100%);
```

### 中性色系统

| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| **Deep Space** | `#0A0E27` | 主背景（深色模式） |
| **Code Dark** | `#1A1A2E` | 卡片背景 |
| **Slate Gray** | `#2D3748` | 次要背景 |
| **Text Light** | `#F5F7FA` | 主要文字（深色背景） |
| **Text Dark** | `#1A202C` | 主要文字（浅色背景） |
| **Text Gray** | `#A0AEC0` | 次要文字 |

### 语义色

| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| **Success** | `#38A169` | 成功、完成 |
| **Warning** | `#DD6B20` | 警告、注意 |
| **Error** | `#E53E3E` | 错误、危险 |
| **Info** | `#3182CE` | 信息、提示 |

---

## 📐 字体系统

### 英文字体

| 用途 | 字体系列 | 字重 | 示例 |
|------|---------|------|------|
| **大标题** | Inter | Bold (700) | 48px-72px |
| **标题** | Inter | SemiBold (600) | 36px-48px |
| **副标题** | Inter | Medium (500) | 24px-32px |
| **正文** | Inter | Regular (400) | 16px-18px |
| **次要文字** | Inter | Regular (400) | 14px |
| **代码** | JetBrains Mono | Regular (400) | 14px-16px |

### 中文字体

| 用途 | 字体系列 | 字重 | 示例 |
|------|---------|------|------|
| **大标题** | 思源黑体 | Bold (700) | 48px-72px |
| **标题** | 思源黑体 | SemiBold (600) | 36px-48px |
| **副标题** | 思源黑体 | Medium (500) | 24px-32px |
| **正文** | 思源黑体 | Regular (400) | 16px-18px |
| **次要文字** | 思源黑体 | Light (300) | 14px |
| **代码** | 更纱黑体 SC | Regular (400) | 14px-16px |

### 字号规范

```css
/* 字号系统 */
--text-xs: 12px;      /* 超小 - 注释 */
--text-sm: 14px;      /* 小 - 次要文字 */
--text-base: 16px;    /* 基础 - 正文 */
--text-lg: 18px;      /* 大 - 正文强调 */
--text-xl: 20px;      /* 超大 - 小标题 */
--text-2xl: 24px;     /* 副标题 */
--text-3xl: 30px;     /* 标题 */
--text-4xl: 36px;     /* 大标题 */
--text-5xl: 48px;     /* 超大标题 */
--text-6xl: 60px;     /* 展示标题 */
--text-7xl: 72px;     /* 展示大标题 */
```

---

## 🎭 应用场景规范

### 网站应用

#### 导航栏
```css
高度：64px
Logo 高度：40px
导航间距：24px
背景：rgba(10, 14, 39, 0.8) + backdrop-blur
悬停效果：白色背景 10% 透明度
```

#### Hero 区域
```css
最小高度：100vh
Logo 动画：从中心展开 (0.8s)
渐变背景：品牌渐变 + 动画
按钮：渐变 + 悬停光效
```

#### 卡片设计
```css
圆角：16px
背景：rgba(255, 255, 255, 0.05) + backdrop-blur
边框：1px solid rgba(255, 255, 255, 0.1)
悬停上浮：-8px
阴影：0 20px 40px rgba(102, 126, 234, 0.3)
过渡：all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

#### 按钮系统

**主按钮（Brand Button）**
```css
背景：var(--brand-gradient)
文字：白色
圆角：full (9999px)
内边距：16px 32px
悬停：scale(1.05) + 阴影
```

**次要按钮（Secondary Button）**
```css
背景：rgba(255, 255, 255, 0.1)
边框：1px solid rgba(255, 255, 255, 0.2)
文字：白色
圆角：full
内边距：16px 32px
```

---

### 社交媒体

#### 分享图片
```
尺寸：1200x630px (Open Graph)
布局：Logo + 标语 + 渐变背景
字体：思源黑体 Bold
```

#### 头像
```
尺寸：400x400px
内容：Logo 图标版本
背景：品牌渐变
```

---

### 文档系统

#### 页眉
```
高度：64px
Logo：品牌 Logo（简化版）
背景：白色 / 深色
```

#### 页脚
```
高度：48px
内容：版权信息 + 链接
背景：浅灰 / 深灰
```

---

## 📱 响应式规范

### 断点系统

```css
/* 手机竖屏 */
--breakpoint-sm: 640px;

/* 手机横屏 / 平板竖屏 */
--breakpoint-md: 768px;

/* 平板横屏 */
--breakpoint-lg: 1024px;

/* 桌面 */
--breakpoint-xl: 1280px;

/* 大桌面 */
--breakpoint-2xl: 1536px;
```

### Logo 响应式尺寸

| 设备 | Logo 尺寸 | 导航栏高度 |
|------|----------|-----------|
| 手机 | 32px | 56px |
| 平板 | 40px | 64px |
| 桌面 | 48px | 64px |
| 大桌面 | 56px | 72px |
| Hero | 96px-128px | - |

---

## ✨ 动画系统

### 持续时间

| 动画类型 | 时长 | 用途 |
|---------|------|------|
| **快速** | 0.1s - 0.2s | 按钮悬停、图标变化 |
| **中速** | 0.3s - 0.4s | 卡片动画、菜单展开 |
| **慢速** | 0.5s - 0.6s | 页面过渡、模态框 |
| **超长** | 0.8s - 1.0s | Logo 展开、Hero 动画 |

### 缓动函数

```css
/* 默认缓动 */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);

/* 弹性缓动 */
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* 缓入 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* 缓出 */
--ease-out: cubic-bezier(0, 0, 0.2, 1);

/* 缓入缓出 */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### 常见动画

**1. 淡入（Fade In）**
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**2. 缩放（Scale）**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

**3. 悬浮（Float）**
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

**4. 脉冲（Pulse）**
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

---

## 🚫 使用禁忌

### ❌ 禁止行为

1. **Logo 使用**
   - ❌ 不拉伸或变形 Logo
   - ❌ 不改变 Logo 颜色（除非单色版本）
   - ❌ 不添加额外效果（阴影、发光等）
   - ❌ 不使用过小的尺寸（< 最小尺寸）
   - ❌ 不放置在复杂背景上

2. **色彩使用**
   - ❌ 不使用非品牌色彩
   - ❌ 不随意更改渐变色
   - ❌ 不使用过多颜色（保持简洁）

3. **字体使用**
   - ❌ 不使用非品牌字体
   - ❌ 不随意更改字号层级
   - ❌ 不使用过多字体（保持统一）

### ✅ 正确用法

1. **Logo 使用**
   - ✅ 保持 Logo 原始比例
   - ✅ 使用提供的标准色
   - ✅ 保留足够的安全边距
   - ✅ 在纯色或简单背景使用
   - ✅ 遵循最小尺寸规范

2. **色彩使用**
   - ✅ 使用品牌色彩系统
   - ✅ 保持色彩一致性
   - ✅ 注意对比度（可访问性）

3. **字体使用**
   - ✅ 使用品牌字体系统
   - ✅ 遵循字号层级
   - ✅ 保持文字可读性

---

## 📦 文件结构

```
ai-codemate-web/
├── public/
│   ├── logo-full.svg       # 主 Logo（完整版）
│   ├── logo.svg            # 品牌 Logo（简化版）
│   ├── logo-mono.svg       # 单色版本
│   ├── favicon.svg         # Favicon
│   └── favicon.png         # Favicon PNG
├── app/
│   ├── globals.css         # 全局样式（含色彩变量）
│   ├── layout.tsx          # 布局（含 metadata）
│   └── page.tsx            # 首页
├── components/
│   ├── Navbar.tsx          # 导航栏
│   ├── Hero.tsx            # Hero 区域
│   └── Footer.tsx          # Footer
└── docs/
    └── BRAND_VI.md         # 品牌 VI 规范（本文档）
```

---

## 🎨 品牌故事

在 2026 年的今天，AI 正在重塑编程的未来。

AICodeMate 诞生于一个简单而强大的愿景：  
**让每个开发者都能拥有 AI 超能力。**

我们不是要替代程序员，  
而是要赋予程序员更强的力量。

就像钢铁侠的贾维斯，  
AICodeMate 是每个开发者的 AI 伙伴。

**科技与温暖并存，**  
**专业与友好共融。**

**一起，让编程更美好。**  
**一起，编码未来。**

---

## 📞 联系方式

**项目地址：** https://github.com/tophpc/ai-codemate-web  
**官方网站：** https://www.ai-codemate.com  
**维护团队：** 旺财 AI 助手 🐶

---

**最后更新：** 2026-03-16  
**版本：** 2.0 - 全面融合版  
**维护者：** 旺财 AI 助手 🐶
