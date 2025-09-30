exports.handler = async (event) => {
        if (event.httpMethod !== 'POST') {
                return { statusCode: 405, body: 'Method Not Allowed' };
                    }

                        const data = JSON.parse(event.body);
                            
                                const result = {
                                        status: 'success',
                                                message: 'Tela calibrada',
                                                        data: {
                                                                    resolution: data.resolution,
                                                                                refreshRate: data.refreshRate,
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