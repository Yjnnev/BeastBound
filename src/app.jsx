import { useState } from 'preact/hooks'

import { MainMenu } from './screens/MainMenu'
import { SelectScreen } from './screens/SelectScreen'
import { GameScreen } from './screens/GameScreen'
import { CardCollection } from './screens/CardCollection'
import { ProfileScreen } from './screens/ProfileScreen'

export function App() {
  const [screen, set_screen] = useState("menu");
  const [userDeck, set_deck] = useState([]);
  
  return (
    <div>
      {screen === "menu" && (
        <MainMenu 
        onStart={() => set_screen("select")}
        onViewCards={() => set_screen("card_collection")}
        onViewProfile={() => set_screen("profile")}
        />
      )}

      {screen === "card_collection" && (
        <CardCollection 
          onBack={() => set_screen("menu")}
        />
      )}

      {screen === "select" && (
        <SelectScreen 
        onConfirmDeck={() => set_screen("game")}
        onBack={() => set_screen("menu")}
        />
      )}

      {screen === "game" && (
        <GameScreen onBack={() => set_screen("select")}/>
      )}

      {screen === "profile" && (
        <ProfileScreen onBack={() => set_screen("menu")}/>
      )}
    </div>
  )
}
