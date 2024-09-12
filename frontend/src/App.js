// src/App.js
import React, { useState } from 'react';
import Story from './components/Story';

const initialStory = {
    text: "Você está em uma floresta densa. Você pode explorar uma caverna escura, seguir um rio sinuoso ou subir uma colina íngreme.",
    choices: [
        { 
            text: "Explorar a caverna", 
            nextStory: {
                text: "Dentro da caverna, você encontra um tesouro brilhante, mas também ouve um rugido assustador vindo do fundo. Você pode pegar o tesouro ou fugir.",
                choices: [
                    { 
                        text: "Pegar o tesouro", 
                        nextStory: {
                            text: "Você pega o tesouro e rapidamente sai da caverna, sentindo-se vitorioso. No entanto, ao sair, você encontra um grupo de bandidos que exigem o tesouro. Você pode lutar ou entregar o tesouro.",
                            choices: [
                                { 
                                    text: "Lutar", 
                                    nextStory: {
                                        text: "Você luta bravamente e consegue derrotar os bandidos. Agora, você pode decidir o que fazer com o tesouro.",
                                        choices: [
                                            { 
                                                text: "Guardar o tesouro", 
                                                nextStory: {
                                                    text: "Você guarda o tesouro em um lugar seguro e continua sua jornada, agora mais rico e preparado para novas aventuras.",
                                                    choices: []
                                                }
                                            },
                                            { 
                                                text: "Doar o tesouro", 
                                                nextStory: {
                                                    text: "Você decide doar o tesouro para uma vila próxima, ajudando os moradores a melhorar suas vidas. Eles ficam eternamente gratos.",
                                                    choices: []
                                                }
                                            }
                                        ]
                                    }
                                },
                                { 
                                    text: "Entregar o tesouro", 
                                    nextStory: {
                                        text: "Você entrega o tesouro aos bandidos e eles o deixam ir. Você decide seguir o rio para se afastar do perigo.",
                                        choices: [
                                            { 
                                                text: "Seguir o rio", 
                                                nextStory: {
                                                    text: "Seguindo o rio, você encontra uma cachoeira majestosa e decide descansar ali.",
                                                    choices: []
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    { 
                        text: "Fugir", 
                        nextStory: {
                            text: "Você foge da caverna e decide seguir o rio para se afastar do perigo.",
                            choices: [
                                { 
                                    text: "Seguir o rio", 
                                    nextStory: {
                                        text: "Seguindo o rio, você encontra uma vila pacífica onde os moradores oferecem comida e abrigo. Você pode aceitar a hospitalidade ou continuar sua jornada.",
                                        choices: [
                                            { 
                                                text: "Aceitar a hospitalidade", 
                                                nextStory: {
                                                    text: "Você passa a noite na vila, recuperando suas forças para a próxima aventura. Na manhã seguinte, você pode explorar a vila ou seguir em frente.",
                                                    choices: [
                                                        { 
                                                            text: "Explorar a vila", 
                                                            nextStory: {
                                                                text: "Explorando a vila, você descobre uma biblioteca antiga cheia de livros raros e conhecimentos esquecidos.",
                                                                choices: [
                                                                    { 
                                                                        text: "Ler os livros", 
                                                                        nextStory: {
                                                                            text: "Você passa horas lendo os livros e adquire conhecimentos valiosos que podem ajudá-lo em suas futuras aventuras.",
                                                                            choices: []
                                                                        }
                                                                    },
                                                                    { 
                                                                        text: "Conversar com os moradores", 
                                                                        nextStory: {
                                                                            text: "Você conversa com os moradores e aprende sobre a história e os segredos da vila.",
                                                                            choices: []
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        { 
                                                            text: "Seguir em frente", 
                                                            nextStory: {
                                                                text: "Você se despede dos moradores e continua sua jornada, sentindo-se renovado e pronto para novas aventuras.",
                                                                choices: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            { 
                                                text: "Continuar a jornada", 
                                                nextStory: {
                                                    text: "Você continua seguindo o rio e eventualmente encontra uma cachoeira majestosa. Você pode explorar a área ao redor da cachoeira ou seguir em frente.",
                                                    choices: [
                                                        { 
                                                            text: "Explorar a área", 
                                                            nextStory: {
                                                                text: "Explorando a área ao redor da cachoeira, você encontra uma caverna escondida atrás da queda d'água.",
                                                                choices: [
                                                                    { 
                                                                        text: "Entrar na caverna", 
                                                                        nextStory: {
                                                                            text: "Dentro da caverna, você encontra um antigo templo cheio de artefatos misteriosos.",
                                                                            choices: []
                                                                        }
                                                                    },
                                                                    { 
                                                                        text: "Voltar para o rio", 
                                                                        nextStory: {
                                                                            text: "Você decide voltar para o rio e continuar sua jornada.",
                                                                            choices: []
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        { 
                                                            text: "Seguir em frente", 
                                                            nextStory: {
                                                                text: "Você decide seguir em frente e eventualmente chega a uma cidade movimentada cheia de oportunidades.",
                                                                choices: []
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        { 
            text: "Seguir o rio", 
            nextStory: {
                text: "Seguindo o rio, você encontra uma vila pacífica onde os moradores oferecem comida e abrigo. Você pode aceitar a hospitalidade ou continuar sua jornada.",
                choices: [
                    { 
                        text: "Aceitar a hospitalidade", 
                        nextStory: {
                            text: "Você passa a noite na vila, recuperando suas forças para a próxima aventura. Na manhã seguinte, você pode explorar a vila ou seguir em frente.",
                            choices: [
                                { 
                                    text: "Explorar a vila", 
                                    nextStory: {
                                        text: "Explorando a vila, você descobre uma biblioteca antiga cheia de livros raros e conhecimentos esquecidos.",
                                        choices: [
                                            { 
                                                text: "Ler os livros", 
                                                nextStory: {
                                                    text: "Você passa horas lendo os livros e adquire conhecimentos valiosos que podem ajudá-lo em suas futuras aventuras.",
                                                    choices: []
                                                }
                                            },
                                            { 
                                                text: "Conversar com os moradores", 
                                                nextStory: {
                                                    text: "Você conversa com os moradores e aprende sobre a história e os segredos da vila.",
                                                    choices: []
                                                }
                                            }
                                        ]
                                    }
                                },
                                { 
                                    text: "Seguir em frente", 
                                    nextStory: {
                                        text: "Você se despede dos moradores e continua sua jornada, sentindo-se renovado e pronto para novas aventuras.",
                                        choices: []
                                    }
                                }
                            ]
                        }
                    },
                    { 
                        text: "Continuar a jornada", 
                        nextStory: {
                            text: "Você continua seguindo o rio e eventualmente encontra uma cachoeira majestosa. Você pode explorar a área ao redor da cachoeira ou seguir em frente.",
                            choices: [
                                { 
                                    text: "Explorar a área", 
                                    nextStory: {
                                        text: "Explorando a área ao redor da cachoeira, você encontra uma caverna escondida atrás da queda d'água.",
                                        choices: [
                                            { 
                                                text: "Entrar na caverna", 
                                                nextStory: {
                                                    text: "Dentro da caverna, você encontra um antigo templo cheio de artefatos misteriosos.",
                                                    choices: []
                                                }
                                            },
                                            { 
                                                text: "Voltar para o rio", 
                                                nextStory: {
                                                    text: "Você decide voltar para o rio e continuar sua jornada.",
                                                    choices: []
                                                }
                                            }
                                        ]
                                    }
                                },
                                { 
                                    text: "Seguir em frente", 
                                    nextStory: {
                                        text: "Você decide seguir em frente e eventualmente chega a uma cidade movimentada cheia de oportunidades.",
                                        choices: []
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        { 
            text: "Subir a colina", 
            nextStory: {
                text: "Subindo a colina, você tem uma vista panorâmica da floresta e avista uma cidade ao longe. Você pode descer em direção à cidade ou explorar mais a floresta.",
                choices: [
                    { 
                        text: "Descer em direção à cidade", 
                        nextStory: {
                            text: "Você desce a colina e chega à cidade, onde encontra novas oportunidades e aventuras. Você pode explorar o mercado ou visitar a biblioteca da cidade.",
                            choices: [
                                { 
                                    text: "Explorar o mercado", 
                                    nextStory: {
                                      text: "No mercado, você encontra mercadores vendendo itens raros e exóticos.",
                                      choices: [
                                          { 
                                              text: "Comprar um item raro", 
                                              nextStory: {
                                                  text: "Você compra um item raro que pode ser útil em suas futuras aventuras.",
                                                  choices: []
                                              }
                                          },
                                          { 
                                              text: "Conversar com os mercadores", 
                                              nextStory: {
                                                  text: "Você conversa com os mercadores e aprende sobre os itens raros e suas origens.",
                                                  choices: []
                                              }
                                          }
                                      ]
                                  }
                              },
                              { 
                                  text: "Visitar a biblioteca", 
                                  nextStory: {
                                      text: "Na biblioteca, você encontra livros antigos e manuscritos que revelam segredos sobre a floresta e suas criaturas.",
                                      choices: [
                                          { 
                                              text: "Ler um livro antigo", 
                                              nextStory: {
                                                  text: "Você lê um livro antigo e descobre uma lenda sobre um tesouro escondido na floresta.",
                                                  choices: []
                                              }
                                          },
                                          { 
                                              text: "Estudar os manuscritos", 
                                              nextStory: {
                                                  text: "Você estuda os manuscritos e aprende sobre as criaturas mágicas que habitam a floresta.",
                                                  choices: []
                                              }
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  },
                  { 
                      text: "Explorar mais a floresta", 
                      nextStory: {
                          text: "Explorando mais a floresta, você encontra uma clareira onde um grupo de aventureiros está acampado. Eles convidam você para se juntar a eles.",
                          choices: [
                              { 
                                  text: "Juntar-se aos aventureiros", 
                                  nextStory: {
                                      text: "Você se junta aos aventureiros e juntos vocês planejam explorar uma ruína antiga na floresta.",
                                      choices: []
                                  }
                              },
                              { 
                                  text: "Continuar sozinho", 
                                  nextStory: {
                                      text: "Você decide continuar sozinho e eventualmente encontra uma árvore gigante com uma porta secreta.",
                                      choices: [
                                          { 
                                              text: "Entrar na porta secreta", 
                                              nextStory: {
                                                  text: "Você entra na porta secreta e descobre um mundo subterrâneo cheio de mistérios.",
                                                  choices: []
                                              }
                                          },
                                          { 
                                              text: "Ignorar a porta", 
                                              nextStory: {
                                                  text: "Você ignora a porta e continua sua jornada pela floresta.",
                                                  choices: []
                                              }
                                          }
                                      ]
                                  }
                              }
                          ]
                      }
                  }
              ]
          }
      }
  ]
};

const App = () => {
  const [story, setStory] = useState(initialStory);

  const handleChoice = (nextStory) => {
      setStory(nextStory);
  };

  return (
      <div>
          <Story text={story.text} choices={story.choices.map(choice => ({
              ...choice,
              action: () => handleChoice(choice.nextStory)
          }))} />
      </div>
  );
};

export default App;