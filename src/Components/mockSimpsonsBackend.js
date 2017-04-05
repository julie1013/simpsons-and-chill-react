var episodes = [
  {
    id: 1,
    season: 1,
    title: 'Simpsons Roasting on an Open Fire',
    airDate: 'December 17, 1989',
    viewers: '24.5 million',
    description: "In the episode, Homer Simpson discovers that he will not be getting a Christmas bonus and thus his family has no money to buy Christmas presents after they had to waste money on getting his son Bart's tattoo removed. He decides to keep their financial troubles a secret and gets a job as a shopping mall Santa Claus, but later discovers that the job does not pay enough. Desperate for a miracle, Homer and Bart go to the dog-racing track on Christmas Eve in hopes of earning some money but end up adopting an abandoned greyhound, Santa's Little Helper."
  },
  {
    id: 2,
    season: 1,
    title: 'Bart the Genius',
    airDate: 'January 14, 1990',
    viewers: '24.5 million',
    description: "In the episode Bart cheats on an intelligence test and is declared a genius, so he is sent to a school for gifted children. Though he initially enjoys being treated as a genius, he begins to see the downside of his new life."
  },
  {
    'id': 3,
    season: 4,
    title: 'Treehouse of Horror IV',
    airDate: 'October 28, 1993',
    viewers: '24.0 million',
    description: "In 'The Devil and Homer Simpson', Homer Simpson announces he would sell his soul for a doughnut, and the Devil appears to make a deal with Homer. Homer tries to outsmart the Devil by not finishing the doughnut but eventually eats it and is sent to Hell. A trial is held between Homer and the Devil to determine the rightful owner of Homer's soul. In 'Terror at 5½ Feet', while riding the bus to school, Bart Simpson believes he sees a gremlin taking apart the bus piece by piece. Nobody sees it except for Bart, so he tries to remove it on his own. In 'Bart Simpson's Dracula', Mr. Burns is a vampire and Bart falls victim to his bite. Lisa and the rest of the family go to Burns' castle to kill Burns so Bart can return to normal."
  }
]

var mockSimpsonsBackend = {
  init: () => {
    if (!window.localStorage.watchList) {
      window.localStorage.watchList = JSON.stringify({episode_ids: []})
    }
  },
  getEpisodes: () => {
    return new Promise((resolve, reject) => {
      resolve(episodes)
    })
  },
  addToWatchList: (idToAdd) => {
    return new Promise((resolve, reject) => {
      var watchList = JSON.parse(window.localStorage.watchList)
      watchList.episode_ids.push(idToAdd)
      window.localStorage.watchList = JSON.stringify(watchList)
      resolve({status: 200})
    })
  },
  removeFromWatchList: (idToRemove) => {
    return new Promise((resolve, reject) => {
      var found = false
      var watchList = JSON.parse(window.localStorage.watchList)
      var index = watchList.episode_ids.indexOf(idToRemove)
      if (index > -1) {
        found = true
        watchList.episode_ids.splice(index, 1)
      }
      if (found) {
        window.localStorage.watchList = JSON.stringify(watchList)
        resolve({status: 200})
      } else {
        reject({status: 500})
      }
    })
  },
  getWatchList: () => {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(window.localStorage.watchList))
    })
  }
}

export {
  mockSimpsonsBackend
}
