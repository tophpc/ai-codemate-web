"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero 区域 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 动态背景 */}
        <div className="absolute inset-0 gradient-animate opacity-20" />
        
        {/* 装饰性圆形 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              🐶 旺财 AI
            </div>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            构建最智能的
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              软件编程 AI
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            软件研发团队 AI 学习与实战指南 - 面向全球医疗软件 AI 开发者
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button className="button-hover px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-lg">
              📚 开始学习
            </button>
            <button className="button-hover px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-lg border border-white/20">
              🛠️ 工具库
            </button>
            <button className="button-hover px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-lg border border-white/20">
              📊 资讯日报
            </button>
          </motion.div>

          {/* 统计数据 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-gray-400"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="text-sm">篇文章</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-sm">个工具</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-sm">个案例</div>
            </div>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* 核心特色 */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ✨ 核心特色
            </h2>
            <p className="text-xl text-gray-400">为什么选择旺财 AI 学习知识库</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "系统化学习",
                desc: "从入门到精通，完整的学习路径设计",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "💻",
                title: "实战型教程",
                desc: "真实项目案例，即学即用",
                color: "from-blue-500 to-purple-500",
              },
              {
                icon: "🏥",
                title: "行业化案例",
                desc: "专注医疗软件 AI 应用场景",
                color: "from-pink-500 to-red-500",
              },
              {
                icon: "📰",
                title: "每日更新",
                desc: "追踪最新 AI 编程动态和工具",
                color: "from-orange-500 to-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 热门推荐 */}
      <section className="py-24 px-4 relative bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🔥 热门推荐
            </h2>
            <p className="text-xl text-gray-400">精选优质内容，助你快速成长</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tag: "🔥 热门",
                title: "GitHub Copilot 完全指南",
                desc: "从入门到精通，掌握最强 AI 编程助手",
                gradient: "from-purple-600 to-pink-600",
              },
              {
                tag: "⭐ 推荐",
                title: "医疗 AI 案例分析",
                desc: "腾讯觅影、阿里健康等实战案例解析",
                gradient: "from-blue-600 to-purple-600",
              },
              {
                tag: "🆕 最新",
                title: "Claude Code v2.1 发布",
                desc: "多文件编辑能力大幅增强",
                gradient: "from-orange-600 to-pink-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className={`h-48 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <span className="text-6xl">{item.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.desc}</p>
                  <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center gap-2">
                    阅读更多 <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📚 学习路径
            </h2>
            <p className="text-xl text-gray-400">循序渐进，从入门到精通</p>
          </motion.div>

          <div className="relative">
            {/* 连接线 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "入门",
                  desc: "AI 基础概念",
                  items: ["AI 是什么", "大模型原理", "常用术语"],
                },
                {
                  step: "02",
                  title: "基础",
                  desc: "工具使用",
                  items: ["Copilot 基础", "Cursor 入门", "简单实践"],
                },
                {
                  step: "03",
                  title: "进阶",
                  desc: "深度应用",
                  items: ["模型微调", "NPU 部署", "边缘计算"],
                },
                {
                  step: "04",
                  title: "实战",
                  desc: "项目落地",
                  items: ["完整项目", "代码重构", "最佳实践"],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-4">{item.desc}</p>
                    <ul className="text-gray-500 space-y-2">
                      {item.items.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 最新资讯 */}
      <section className="py-24 px-4 relative bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📰 最新资讯
            </h2>
            <p className="text-xl text-gray-400">每周更新 AI 编程动态</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                date: "03/16",
                title: "Claude Code v2.1 发布",
                desc: "增强多文件编辑能力，新增智能冲突检测功能",
              },
              {
                date: "03/15",
                title: "GitHub Copilot 企业版落地",
                desc: "迈瑞医疗、联影医疗等企业已成功部署",
              },
              {
                date: "03/14",
                title: "华为云码道公测版上线",
                desc: "支持鸿蒙原生应用开发，个人版免费",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover flex items-center gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
                  <div className="text-center">
                    <div className="text-2xl">{item.date.split("/")[0]}</div>
                    <div className="text-lg">/{item.date.split("/")[1]}</div>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                <button className="flex-shrink-0 text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                  阅读 →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            🐶 旺财 AI 学习知识库
          </div>
          <p className="text-gray-400 mb-4">
            由旺财 AI 助手维护 · 软件研发团队 © 2026
          </p>
          <div className="flex justify-center gap-6 text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-purple-400 transition-colors">关于我们</a>
            <a href="#" className="hover:text-purple-400 transition-colors">联系方式</a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
