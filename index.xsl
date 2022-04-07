<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html>
    <head>
        <title>Donating Plasma</title>
        <style>
            h1{
                background-image: linear-gradient(to top,#3989ebee,#3399FF);
                color: white;
                text-align: center;
                font-weight: bold;
                font-size: 40px;
                padding: 20px;
            }
            #centres {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
            }

            #centres td, #centres th {
            border: 1px solid #ddd;
            padding: 8px;
            }

            #centres tr:nth-child(even){background-color: #f2f2f2;}

            #centres tr:hover {background-color: #ddd;}

            #centres th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #4CAF50;
            color: white;
            }
        </style>
    </head>
    <body>
            <h1><xsl:value-of select="centres/heading"/></h1>
			<table id="centres">
				<tr>
					<th>Name</th>
					<th>Address</th>
					<th>Helpline No.</th>
				</tr>
				<xsl:for-each select="centres/centre">
                <tr>
                    <td><xsl:value-of select="name"/></td>
                    <td><xsl:value-of select="address"/></td>
					<td><xsl:value-of select="phone"/></td>
                </tr>
            </xsl:for-each>
			</table>
    </body>
    </html>
</xsl:template>
</xsl:stylesheet>	
