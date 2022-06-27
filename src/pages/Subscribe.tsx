import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useCreateSubscriberMutation } from "../hraphql/generated";


export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <Header />
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-3 mx-auto">
        <div className="max-w-640px" >
          <img src="/src/assets/ubiiLogo.svg" alt="" />
          <h1 className="mt-1 text-[2.5rem] leading-tight ">Construa uma <strong className="text-blue-500"> aplicação completa</strong>, <br></br>do zero, com <strong className="text-blue-500"> React JS</strong></h1>
          <p className="mt-4 text-gray-200 leading-relaxed"> Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas <br></br>e com alta demanda para acessar as melhores oportunidades do mercado. </p>
        </div>
        <div className="p-8 bg-gray-700 border gray-500 rounded" >
          <strong className="text-1xl mb-6 block ">Increva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className=" flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h14"
              type="text"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/mockup.png" alt="" />
      <Footer />
    </div>
  );
}