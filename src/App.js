import Header from './header';
import './App.css';
import Footer from './footer';
import Content from './content';


export function App() {
  let mytitle = "React Experiments"
  return(
    <div>
      <header>title={mytitle}</header>
      <content></content>
      <footer></footer>
    </div>
  )
}
  