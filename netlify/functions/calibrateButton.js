exports.handler = async (event) => {
        if (event.httpMethod !== 'POST') {
                return { statusCode: 405, body: 'Method Not Allowed' };
                    }

                        const data = JSON.parse(event.body);
                            
                                // Aqui você processa a calibração do botão
                                    const result = {
                                            status: 'success',
                                                    message: 'Calibração de botão aplicada',
                                                            data: {
                                                                        speed: data.speed,
                                                                                    precision: data.precision,
                                                                                                timestamp: new Date().toISOString()
                                                                                                        }
                                                                                                            };

                                                                                                                return {
                                                                                                                        statusCode: 200,
                                                                                                                                headers: {
                                                                                                                                            'Content-Type': 'application/json',
                                                                                                                                                        'Access-Control-Allow-Origin': '*'
                                                                                                                                                                },
                                                                                                                                                                        body: JSON.stringify(result)
                                                                                                                                                                            };
    };