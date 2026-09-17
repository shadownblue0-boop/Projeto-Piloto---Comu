import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { PilotoBonus } from './PilotoBonus';
import { getPilotoBenefits } from '../pilotoData';

const render = (node: React.ReactElement) =>
  renderToStaticMarkup(<MemoryRouter initialEntries={['/piloto']}>{node}</MemoryRouter>);

describe('PilotoBonus', () => {
  it('mostra cada benefício com parceiro, valor e descrição', () => {
    const html = render(<PilotoBonus />);
    for (const b of getPilotoBenefits()) {
      expect(html).toContain(b.partner);
      expect(html).toContain(b.highlight);
      expect(html).toContain(b.title);
    }
  });

  it('o código do cupom é um botão de copiar, não um texto morto', () => {
    const html = render(<PilotoBonus />);
    const comCupom = getPilotoBenefits().filter((b) => b.couponCode);
    expect(comCupom.length).toBeGreaterThan(0);
    for (const b of comCupom) {
      expect(html).toMatch(new RegExp(`<button[^>]*aria-label="[^"]*${b.couponCode}`));
    }
  });

  it('o valor do cupom cabe numa linha (nada de "acesso vip" quebrado)', () => {
    for (const b of getPilotoBenefits()) {
      expect(b.highlight.length).toBeLessThanOrEqual(9);
    }
  });

  it('os Artefatos viram vitrine, com capas reais e um botão de acesso à estante', () => {
    const html = render(<PilotoBonus />);
    expect(html).toContain('piloto-incluso__destaque');
    expect(html).toContain('/piloto/biblioteca-artefatos.jpg');
    expect(html).toContain('Artefatos');
    expect(html).not.toMatch(/piloto-incluso__titulo">Biblioteca/);
    // o Link do router escreve class antes de href
    expect(html).toMatch(/<a[^>]*class="piloto-btn[^"]*"[^>]*href="\/artefatos"/);
    // o que a pessoa realmente baixa
    for (const chip of ['Ebooks', 'Brushes', 'Packs 3D']) expect(html).toContain(chip);
  });

  it('os outros três benefícios continuam listados, agora ao lado da vitrine', () => {
    const html = render(<PilotoBonus />);
    for (const t of ['Desafios', 'Certificado', 'Comunidade']) expect(html).toContain(t);
    expect(html).toContain('piloto-incluso__lista');
  });

  it('cada benefício mostra material real da Comu, não ícone de linha genérico', () => {
    const html = render(<PilotoBonus />);
    const lista = html.split('piloto-incluso__lista')[1] ?? '';
    // desafio: a arte de uma capa real; certificado: o selo da marca
    expect(lista).toContain('/piloto/incluso-desafio.jpg');
    expect(lista).toContain('/brand/selo-amarelo.png');
    // comunidade: rostos de professores de verdade
    expect(lista).toMatch(/src="\/teachers\/[a-z-]+\.webp"/);
    // nada de ícone desenhado em quadradinho
    expect(lista).not.toContain('<svg');
  });
});
