import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

let TotalPop = 2837;
/// STATE
/// 0:Terminated Service at Station
/// 1:Arriving Station
/// 2:Departing Station
/// 3:Service Disrubted
//TODO: ADD Service Disrub

export const POST = async ({ request }) => {
	const { AishaPop, Authentication } = await request.json();
	if (AishaPop == true && (Authentication === 'trueButNotReally')) {
		TotalPop = TotalPop + 1;
		console.log('TotalPop:', TotalPop);
		return new Response(
			JSON.stringify({
				message: 'Success',
				Totalpop: TotalPop,
			}),
			{ status: 200 }
		);
	}
	else {
		console.log('false')
		return new Response(
			JSON.stringify({
				message: 'Easteregg: You found the hidden page!',
			}),
			{ status: 418  }
		);
	}

};

export const GET = async ({ request }) => {
	const { AishaPop, Authentication } = await request.json();
	if (AishaPop == true && (Authentication === 'trueButNotReally')) {
		console.log('TotalPop:', TotalPop);
		return new Response(
			JSON.stringify({
				message: 'Success',
				Totalpop: TotalPop,
			}),
			{ status: 200 }
		);
	}
	else {
		console.log('false')
		return new Response(
			JSON.stringify({
				message: "Nah,Please don't spam api!, it expensive",
			}),
			{ status: 418  }
		);
	}

};
