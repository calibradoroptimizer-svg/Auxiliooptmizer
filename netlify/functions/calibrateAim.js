exports.handler = async (event) => {
        if (event.httpMethod !== 'POST') {
                return { statusCode: 405, body: 'Method Not Allowed' };
                    }

                        const data = JSON.parse(event.body);
                            
                                const result = {
                                        status: 'success',
                                                message: 'Mira calibrada',
                                                        data: {
                                                                    smooth: data.smooth,
                                                                                fov: data.fov,
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