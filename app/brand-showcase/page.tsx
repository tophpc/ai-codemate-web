export default function BrandShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
          🎨 AICodeMate 品牌展示中心
        </h1>
        
        {/* Logo 展示 */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">🎯 Logo 系统</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-6xl mb-4">🦞</div>
              <h3 className="text-xl font-bold text-white mb-2">主 Logo</h3>
              <p className="text-gray-400">品牌完整标识</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-6xl mb-4">🦞</div>
              <h3 className="text-xl font-bold text-white mb-2">简化版</h3>
              <p className="text-gray-400">简化品牌标识</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-6xl mb-4">🦞</div>
              <h3 className="text-xl font-bold text-white mb-2">单色版</h3>
              <p className="text-gray-400">单色应用场景</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-6xl mb-4">🦞</div>
              <h3 className="text-xl font-bold text-white mb-2">Favicon</h3>
              <p className="text-gray-400">网站图标</p>
            </div>
          </div>
        </section>

        {/* 色彩系统 */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">🌈 品牌色彩</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">主色系</h3>
              <div className="bg-[#0066FF] h-20 rounded-xl mb-2"></div>
              <p className="text-white font-bold">Brand Blue</p>
              <p className="text-gray-400 text-sm">#0066FF</p>
              <div className="bg-[#7B2CFF] h-20 rounded-xl mb-2"></div>
              <p className="text-white font-bold">AI Purple</p>
              <p className="text-gray-400 text-sm">#7B2CFF</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">强调色</h3>
              <div className="bg-[#FF9500] h-20 rounded-xl mb-2"></div>
              <p className="text-white font-bold">Energy Orange</p>
              <p className="text-gray-400 text-sm">#FF9500</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">中性色</h3>
              <div className="bg-[#0A0E27] h-20 rounded-xl mb-2"></div>
              <p className="text-white font-bold">Deep Space</p>
              <p className="text-gray-400 text-sm">#0A0E27</p>
              <div className="bg-[#F5F7FA] h-20 rounded-xl mb-2"></div>
              <p className="text-gray-800 font-bold">Text Light</p>
              <p className="text-gray-400 text-sm">#F5F7FA</p>
            </div>
          </div>
        </section>

        {/* 品牌海报 */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">📊 品牌海报</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">品牌分享图</h3>
              <p className="text-gray-400 mb-4">社交媒体分享使用</p>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-32 rounded-lg"></div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">愿景海报</h3>
              <p className="text-gray-400 mb-4">品牌愿景展示</p>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 rounded-lg"></div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">应用场景图</h3>
              <p className="text-gray-400 mb-4">使用场景展示</p>
              <div className="bg-gradient-to-r from-orange-600 to-pink-600 h-32 rounded-lg"></div>
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
