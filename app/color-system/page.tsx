export default function ColorSystem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
          🌈 AICodeMate 品牌色彩系统
        </h1>

        {/* 主色系 */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">🎨 主色系</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-[#0066FF] h-32 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Brand Blue</h3>
              <p className="text-gray-400 mb-2">品牌主色 - 代表专业与信任</p>
              <code className="bg-white/10 px-3 py-1 rounded text-white">#0066FF</code>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-[#7B2CFF] h-32 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-2">AI Purple</h3>
              <p className="text-gray-400 mb-2">AI 紫色 - 代表智能与创新</p>
              <code className="bg-white/10 px-3 py-1 rounded text-white">#7B2CFF</code>
            </div>
          </div>
        </section>

        {/* 强调色 */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">⚡ 强调色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-[#FF9500] h-32 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-2">Energy Orange</h3>
              <p className="text-gray-400 mb-2">能量橙 - 代表活力与热情</p>
              <code className="bg-white/10 px-3 py-1 rounded text-white">#FF9500</code>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-32 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-2">渐变主色</h3>
              <p className="text-gray-400 mb-2">品牌渐变 - 从紫色到粉色</p>
              <code className="bg-white/10 px-3 py-1 rounded text-white">purple-600 → pink-600</code>
            </div>
          </div>
        </section>

        {/* 中性色 */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">⚫ 中性色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-[#0A0E27] h-20 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">Deep Space</h3>
              <code className="bg-white/10 px-3 py-1 rounded text-white text-sm">#0A0E27</code>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-[#1A1A2E] h-20 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">Code Dark</h3>
              <code className="bg-white/10 px-3 py-1 rounded text-white text-sm">#1A1A2E</code>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-[#F5F7FA] h-20 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Text Light</h3>
              <code className="bg-white/10 px-3 py-1 rounded text-gray-600 text-sm">#F5F7FA</code>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="bg-[#A0AEC0] h-20 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-2">Text Gray</h3>
              <code className="bg-white/10 px-3 py-1 rounded text-white text-sm">#A0AEC0</code>
            </div>
          </div>
        </section>

        {/* 返回首页 */}
        <div className="text-center mt-10">
          <a href="/" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all hover:scale-105">
            ← 返回首页
          </a>
        </div>
      </div>
    </div>
  );
}
