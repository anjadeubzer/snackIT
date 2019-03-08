// import React from 'react';

export function formatPrice(cents) {
	return (cents / 100).toLocaleString("de-DE", {
		style: "currency",
		currency: "EUR"
	});
}