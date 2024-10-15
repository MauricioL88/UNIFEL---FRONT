import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import ListItem from './components/ListItem'
import { gamesListData } from './utils/GamesData'
import { channelListData } from './utils/ChannelData'
import { socialListData } from './utils/SocialList'

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <Section title="Meus Jogos"
          subtitle="Os games que mais curto jogar!"
          className="games-list"
        >
          {
            gamesListData.map((item) => {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list" 
        >
          {
            channelListData.map((item) => {
              return(
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section title="Minhas redes"
          subtitle="Conecte-se comigo agora mesmo!"
        >
          {
            socialListData.map((item) => {
              return(
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
      </main>

    </div>
  )
}

export default App
