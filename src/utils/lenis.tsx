import Lenis from '@studio-freight/lenis';
import React from 'react';
import { useEffect } from 'react';

export default function LenisScroll() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1,
		})

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf);
	})

	return <script about='lenis' />;
}