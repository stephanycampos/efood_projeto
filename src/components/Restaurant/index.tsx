import Tag from '../Tag'
import starIcon from '../../assets/images/estrela.png'
import * as S from './styles'

type Props = {
  restaurant: Restaurants
}

const Restaurant = ({ restaurant }: Props) => {
  const {
    id,
    titulo,
    destacado,
    tipo,
    avaliacao,
    descricao,
    capa
  } = restaurant

  return (
    <S.Card>
      <img src={capa} alt={titulo} />

      <S.Infos>
        <Tag>{tipo}</Tag>
        {destacado && <Tag>Destaque</Tag>}
      </S.Infos>

      <S.ContainerInfos>
        <div>
          <div className="capa">
            <S.Title>{titulo}</S.Title>
            <div className="nota">
              {avaliacao}
              <img src={starIcon} alt="Estrela" />
            </div>
          </div>

          <S.Description>{descricao}</S.Description>
        </div>

        <S.ButtonAbout
          to={`/restaurant/${id}`}
          title={`Clique aqui para ver o cardápio de ${titulo}`}
        >
          Saiba mais
        </S.ButtonAbout>
      </S.ContainerInfos>
    </S.Card>
  )
}

export default Restaurant
