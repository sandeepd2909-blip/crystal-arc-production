"""Build the downloadable Trophies & Awards brochure from repository assets."""
from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUT = PUBLIC / "brochure" / "trophies-awards.pdf"
W, H = A4
M = 42
INK = HexColor("#1A1512")
WINE = HexColor("#4A1015")
GOLD = HexColor("#A77C35")
IVORY = HexColor("#F7F2EB")
TAUPE = HexColor("#B5A99A")


def draw_image_cover(c, name, x, y, width, height):
    image = ImageReader(str(PUBLIC / name))
    iw, ih = image.getSize()
    scale = max(width / iw, height / ih)
    sw, sh = iw * scale, ih * scale
    c.saveState()
    clip = c.beginPath()
    clip.rect(x, y, width, height)
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(image, x + (width - sw) / 2, y + (height - sh) / 2, sw, sh, mask="auto")
    c.restoreState()


def wrap(c, value, font, size, max_width):
    words = value.split()
    lines, line = [], ""
    for word in words:
        next_line = f"{line} {word}".strip()
        if stringWidth(next_line, font, size) <= max_width:
            line = next_line
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def text_block(c, value, x, y, width, font="Helvetica", size=10, leading=15, color=INK):
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap(c, value, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def footer(c, number):
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.6)
    c.line(M, 29, W - M, 29)
    c.setFillColor(TAUPE)
    c.setFont("Helvetica", 8)
    c.drawString(M, 16, "CRYSTAL ARC - CUSTOM TROPHIES & AWARDS")
    c.drawRightString(W - M, 16, f"{number:02d}")


def heading(c, eyebrow, title, page):
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(M, H - 52, eyebrow.upper())
    c.setFillColor(INK)
    c.setFont("Times-Italic", 31)
    c.drawString(M, H - 92, title)
    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    c.line(M, H - 108, M + 86, H - 108)
    footer(c, page)


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=A4, pageCompression=1)
    c.setTitle("Crystal Arc - Trophies & Awards")
    c.setAuthor("Crystal Arc Factory LLC")
    c.setSubject("Custom trophies, awards and recognition pieces")

    # Cover
    draw_image_cover(c, "ta-showpiece-v3-1900.webp", 0, 0, W, H)
    c.setFillColor(HexColor("#1A1512"))
    c.rect(0, 0, W * 0.64, H, fill=1, stroke=0)
    c.setFillColor(HexColor("#FFFFFF"))
    c.setFont("Helvetica-Bold", 10)
    c.drawString(M, H - 62, "CRYSTAL ARC")
    c.setStrokeColor(GOLD)
    c.line(M, H - 73, M + 86, H - 73)
    c.setFillColor(IVORY)
    c.setFont("Times-Italic", 37)
    c.drawString(M, 142, "Trophies")
    c.drawString(M, 100, "& Awards")
    c.setFont("Helvetica", 12)
    c.setFillColor(TAUPE)
    c.drawString(M, 72, "Designed for the moments that define legacies.")
    c.setFont("Helvetica", 8)
    c.drawString(M, 43, "DUBAI - ABU DHABI - RIYADH")
    c.showPage()

    # Introduction
    heading(c, "The Crystal Arc standard", "Recognition, made tangible.", 2)
    text_block(c, "For over 25 years, Crystal Arc has designed and manufactured awards that carry more than a name. Each piece is conceived for the occasion, engineered for its material, and finished by hand inside our UAE facility.", M, H - 150, 250, "Helvetica", 11, 17)
    draw_image_cover(c, "trophy-collection.webp", 316, H - 382, 236, 238)
    c.setFillColor(WINE)
    c.rect(M, 142, W - 2 * M, 126, fill=1, stroke=0)
    facts = [("25+", "years of craft"), ("250", "craft specialists"), ("40,000+", "completed projects"), ("0%", "outsourced")]
    x = M + 24
    for value, label in facts:
        c.setFillColor(GOLD)
        c.setFont("Times-Italic", 24)
        c.drawString(x, 221, value)
        c.setFillColor(IVORY)
        c.setFont("Helvetica", 8.5)
        c.drawString(x, 202, label.upper())
        x += 121
    c.showPage()

    # Capabilities
    heading(c, "What we make", "Crafted around your brief.", 3)
    cards = [
        ("ta-cat-crystal.webp", "Crystal awards", "Optical crystal, sculpted forms, precision engraving and colour infill."),
        ("ta-cat-metal-mixed.webp", "Metal & mixed media", "Architectural trophies combining metal, stone, resin and crystal."),
        ("ta-cat-plaques.webp", "Plaques & recognition", "Executive plaques, wall awards and branded commemorative pieces."),
        ("ta-cat-medals.webp", "Medals & sports", "Medals, cups and presentation pieces for competition and ceremony."),
    ]
    y_positions = [480, 230]
    for index, (image, title, body) in enumerate(cards):
        col, row = index % 2, index // 2
        x, y = M + col * 264, y_positions[row]
        draw_image_cover(c, image, x, y + 70, 244, 135)
        c.setFillColor(INK)
        c.setFont("Times-Italic", 20)
        c.drawString(x, y + 44, title)
        text_block(c, body, x, y + 25, 238, "Helvetica", 9.5, 13, HexColor("#61584D"))
    c.showPage()

    # Process and CTA
    heading(c, "From idea to presentation", "A clear path to exceptional.", 4)
    stages = [
        ("01", "Brief", "Share the occasion, quantity, recipient and deadline."),
        ("02", "Design", "We develop material options and approval-ready visualisations."),
        ("03", "Make", "Manufacturing, finishing and quality control happen under one roof."),
        ("04", "Deliver", "Each piece is protected, packed and delivered ready for the moment."),
    ]
    y = H - 154
    for number, title, body in stages:
        c.setFillColor(GOLD)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(M, y, number)
        c.setFillColor(INK)
        c.setFont("Times-Italic", 19)
        c.drawString(M + 46, y - 3, title)
        text_block(c, body, M + 180, y, 310, "Helvetica", 9.5, 13, HexColor("#61584D"))
        c.setStrokeColor(HexColor("#DDD4C9"))
        c.line(M, y - 41, W - M, y - 41)
        y -= 70
    c.setFillColor(WINE)
    c.rect(M, 102, W - 2 * M, 106, fill=1, stroke=0)
    c.setFillColor(IVORY)
    c.setFont("Times-Italic", 24)
    c.drawString(M + 24, 165, "Bring us a brief.")
    c.setFont("Helvetica", 10)
    c.setFillColor(TAUPE)
    c.drawString(M + 24, 142, "info@crystalarc.net  |  +971 4 347 9191  |  crystalarc.net")
    c.setFillColor(GOLD)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(M + 24, 119, "REQUEST A PROPOSAL")
    c.save()


if __name__ == "__main__":
    main()
