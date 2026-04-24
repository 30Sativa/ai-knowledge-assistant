
function App() {
  return (
    <>
    <div className="min-h-screen p-10 space-y-10">

      {/*  KHÔNG dùng system */}
      <div>
        <h2 className="text-xl font-bold mb-4"> Không dùng system</h2>

        <div className="space-y-3">
          <button className="bg-[#10a37f] text-white px-4 py-2 rounded-[10px]">
            Button 1
          </button>

          <button className="bg-[#059669] text-white px-4 py-2 rounded-[10px]">
            Button 2 (lệch màu )
          </button>

          <button className="bg-[#0ea5e9] text-white px-4 py-2 rounded-[10px]">
            Button 3 (loạn luôn )
          </button>
        </div>
      </div>

      {/*  DÙNG system */}
      <div>
        <h2 className="text-xl font-bold mb-4"> Dùng system</h2>

        <div className="space-y-3">
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-base">
            Button 1
          </button>

          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-base">
            Button 2
          </button>

          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-base">
            Button 3
          </button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
