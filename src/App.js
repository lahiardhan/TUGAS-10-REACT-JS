import "semantic-ui-css/semantic.min.css";
import {
	Container,
	Button,
	Flag,
	Icon,
	Header,
	Divider,
	Image,
	Input,
	Label,
	Grid,
} from "semantic-ui-react";

function App() {
	return (
		<div>
			<br />
			<Container>
				<Grid container>
					<Grid.Column>
						<Flag name="id"></Flag>
					</Grid.Column>
					<Grid.Column>
						<Icon name="angle left" />
					</Grid.Column>
					<Grid.Column>
						<Icon name="angle right" />
					</Grid.Column>
					<Grid.Column width={11}>
						<Input fluid icon="star" placeholder="Search..." />
					</Grid.Column>
					<Grid.Column width={2}>
						<Header as="h4">
							<Image
								circular
								src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
								alt="avatar-img"
							/>
							Patrick
						</Header>
					</Grid.Column>
				</Grid>
			</Container>

			<Divider horizontal>SELAMAT DATANG!!!!</Divider>

			<Container textAlign="right">
				<Label color="teal" tag>
					SPORT
				</Label>
			</Container>
			<br />
			<Container textAlign="center">
				<p>
					Ducati belum bisa benar-benar menikmati kemenangan Andrea
					Dovizioso pada MotoGP Qatar di Sirkuit Losail, Senin
					(11/03/2019). Kemungkinan sanksi di balik cerita kemenangan
					menjadi penyebab. Usai Dovi menyegel podium juara MotoGP Qatar
					dengan keunggulan 0,023 detik atas Marc Marquez (Repsol Honda),
					empat tim pabrikan mengajukan protes. Mereka adalah Aprilia, KTM,
					Honda, dan Suzuki. Protes mereka tertuju pada perangkat
					aerodinamika swing arm yang dimiliki para pebalap dengan motor
					Ducati, yakni Dovi dan rekan setimnya, Danilo Petrucci dan Jack
					Miller (Pramac Racing). Mereka menganggap perangkat itu membantu
					pencegahan panas yang berlebihan pada ban belakang dan berpotensi
					memberikan manfaat pada aerodinamika. Sejatinya, pihak MotoGP
					sudah memberikan penegasan dengan menolak protes keempat tim itu.
					Pihak MotoGP menilai bahwa perangkat yang dimiliki Ducati masih
					sesuai regulasi. Tak terima, empat pabrikan itu membawanya ke
					Pengadilan Banding MotoGP. Imbasnya, International Motorcycling
					Federation (FIM) telah mengeluarkan sebuah pernyataan. Mereka tak
					menyebutkan waktu secara pasti, tapi keputusan Argentina, 31
					Maret 2019. "Pengadilan Banding MotoGP terdiri dari tiga panel
					yang tergabung dalam Komite Hakim International FIM. Sidang akan
					diselenggarakan dengan perwakilan tim yang terlibat. MotoGP akan
					diumumkan sebelum MotoGP Argentina yang dijadwalkan 31 Maret,"
					tulis pernyataan FIM, dilansir Tuttomotoriweb. Pihak Ducati
					sendiri sebelumnya sudah angkat bicara mengenai permasalahan
					tersebut. Direktur Olahraga Ducati, Paolo Ciabatti, menyebut
					keluhan itu lebih mengarah ke unsur politis ketimbang olahraga.
				</p>
				<Button.Group>
					<Button
						labelPosition="left"
						icon="plus"
						content="Tambah Tautan Ke List"
						color="teal"
					/>
				</Button.Group>
			</Container>
		</div>
	);
}

export default App;
