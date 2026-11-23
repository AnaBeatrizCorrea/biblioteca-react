function Header(){
    return(
    <header className="border-b-3 border-blue-600">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Biblioteca Ana Beatriz
        </h1>
        <div className="flex gap-6">
          <a href="" className="font-medium text-blue-600 hover:underline">
            Início
          </a>
          <a href="" className="font-medium text-blue-600 hover:underline">
            Livros
          </a>
          <a href="" className="font-medium text-blue-600 hover:underline">
            Usuários
          </a>
          <a href="" className="font-medium text-blue-600 hover:underline">
            Empréstimos
          </a>
        </div>
      </nav>
    </header>
    )
}

export default Header